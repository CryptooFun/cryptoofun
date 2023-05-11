const { Server } = require('@grpc/grpc-js');
const { getBalance, getBalancebyDescending, upsert } = require('../services/walletService');

const messages = require('genproto/cash_wallet_pb');
const services = require('genproto/cash_wallet_grpc_pb');

function askCashBalance(call, callback) {
  getBalance(call.request.getUserId())
    .then(balance => {
      var response = new messages.AskCashBalanceResponse();
      response.setBalance(balance);
      response.setUserId(call.request.getUserId());
      callback(null, response);
    })
    .catch(err => {
      callback(err, null);
    });
}

function askTopBalancesDescending(call, callback) {
  getBalancebyDescending(call.request.getSkip(), call.request.getTake())
    .then(balances => {
      const balanceList = [];
      balances.forEach(item => {
        const bItem = new messages.BalanceItem();
        bItem.setUserId(item.userId);
        bItem.setBalance(item.balance);
        balanceList.push(bItem);
      });
      var response = new messages.AskTopBalancesDescendingResponse();
      response.setBalancesList(balanceList);
      callback(null, response);
    })
    .catch(err => {
      callback(err, null);
    });
}

function modifyCashBalance(call, callback) {
  upsert(call.request.getUserId(), call.request.getDelta())
    .then(cashWallet => {
      var response = new messages.ModifyCashBalanceResponse();
      response.setBalanceAfter(cashWallet.balance);
      response.setUserId(call.request.getUserId());
      callback(null, response);
    })
    .catch(err => {
      callback(err, null);
    });
}

const server = new Server();
server.addService(services.CashWalletServiceService, {
  askCashBalance,
  modifyCashBalance,
  askTopBalancesDescending,
});

module.exports = server;
