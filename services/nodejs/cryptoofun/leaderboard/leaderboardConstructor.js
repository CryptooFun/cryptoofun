const grpc = require('@grpc/grpc-js');
const redisCli = require('./redisdb');

const cashWalletMessages = require('genproto/cash_wallet_pb');
const cashWalletMessageServices = require('genproto/cash_wallet_grpc_pb');

const profileMessages = require('genproto/profile_pb');
const profileServices = require('genproto/profile_grpc_pb');

module.exports = function(){
    const CashWalletClient = new cashWalletMessageServices.CashWalletServiceClient('0.0.0.0:50051', grpc.credentials.createInsecure());
    const ProfileClient = new profileServices.ProfileServiceClient('0.0.0.0:50053', grpc.credentials.createInsecure());

    var cashWalletRequest = new cashWalletMessages.AskTopBalancesDescendingRequest();
    cashWalletRequest.setSkip(0);
    cashWalletRequest.setTake(100);

    CashWalletClient.askTopBalancesDescending(cashWalletRequest, (err, result) => {
        if (err) {
            return;
        }
        var balanceItems = result.getBalancesList();
        var userIds = balanceItems.map((value) => {
             return value.getUserId();
        });

        var userNameRequest = new profileMessages.GetProfileInfoByUserIdsRequest();
        userNameRequest.setUserIdsList(userIds);

        ProfileClient.getProfileInfoByUserIds(userNameRequest, (err, result) => {
            if (err) {
                return;
            }
            
            // Delete redis table before create.
            redisCli.del('cf_leaderboard');

            var profileInfoList = result.getProfileInfoList();
            profileInfoList.sort((a, b) =>{
                if (a.getUserId() < b.getUserId()) {
                    return -1;
                }
                if (a.getUserId() > b.getUserId()) {
                    return 1;
                }
                return 0;
            });

            balanceItems.sort((a, b) =>{
                if (a.getUserId() < b.getUserId()) {
                    return -1;
                }
                if (a.getUserId() > b.getUserId()) {
                    return 1;
                }
                return 0;
            });

            balanceItems.forEach((element, i) => {
                redisCli.zadd([
                    'cf_leaderboard',
                    element.getBalance(),
                    `${element.getUserId()}:${profileInfoList[i].getUsername()}`
                ]);
            });
            console.log('Leaderboard updated!', new Date().toISOString());
        });
    });
}