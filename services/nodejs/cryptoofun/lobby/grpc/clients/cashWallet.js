const grpc = require('@grpc/grpc-js');
const messages = require('genproto/cash_wallet_pb');
const svc = require('genproto/cash_wallet_grpc_pb');

const client = new svc.CashWalletServiceClient(
  process.env.GRPC_CASH_WALLET_SV,
  grpc.credentials.createInsecure()
);

/**
 * @param {string} userId
 * @returns {Promise<number>}
 */
async function askCashBalancePromisified(userId) {
  return await new Promise((resolve, reject) => {
    const request = new messages.AskCashBalanceRequest();
    request.setUserId(userId);

    client.askCashBalance(request, (err, res) => {
      if (err) {
        return reject(err);
      }
      const balance = res.getBalance();
      return resolve(balance);
    });
  });
}

/**
 * @param {string} userId
 * @param {number} delta
 * @returns {Promise<void>}
 */
async function modifyCashBalancePromisified(userId, delta) {
  return await new Promise((resolve, reject) => {
    const request = new messages.ModifyCashBalanceRequest();
    request.setUserId(userId);
    request.setDelta(delta);

    client.modifyCashBalance(request, err => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

module.exports = {
  askCashBalancePromisified,
  modifyCashBalancePromisified,
};
