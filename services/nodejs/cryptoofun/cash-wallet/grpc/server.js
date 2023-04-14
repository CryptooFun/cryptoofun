const {Server} = require('@grpc/grpc-js');
const {
    get,
    update
} = require('../services/walletService'); 

const messages = require('genproto/cash_wallet_pb');
const services = require('genproto/cash_wallet_grpc_pb');

function askCashBalance(call, callback) {
    get(call.request.getUserId()).then(balance => {
        var response = new messages.AskCashBalanceResponse();
        response.setBalance(balance);
        response.setUserId(call.request.getUserId());
        callback(null, response);    
    }).catch(err => {callback(err, null)}); 
}

function modifyCashBalance(call, callback) {
    update(call.request.getUserId(), call.request.getDelta()).then(cashWallet => {
        var response = new messages.ModifyCashBalanceResponse();
        response.setBalanceAfter(cashWallet.balance);
        response.setUserId(call.request.getUserId());
        callback(null, response);    
    }).catch(err => {callback(err, null)}); 
}

const server = new Server();
server.addService(services.CashWalletServiceService, {askCashBalance, modifyCashBalance});

module.exports = server;