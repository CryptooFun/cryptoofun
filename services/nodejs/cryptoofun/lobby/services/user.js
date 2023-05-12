const { prisma } = require('../db');
const grpc = require('@grpc/grpc-js');

const cashWalletMsgs = require('genproto/cash_wallet_pb');
const cashWalletSvc = require('genproto/cash_wallet_grpc_pb');

const cashWalletClient = new cashWalletSvc.CashWalletServiceClient(
  process.env.GRPC_CASH_WALLET_SV,
  grpc.credentials.createInsecure()
);

async function getLobbyUser(userId) {
  return await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      initialCashBalance: true,
      Lobby: {
        select: {
          id: true,
          title: true,
          description: true,
          requiredCashBalance: true,
          challenge: true,
          cashAward: true,
          isAwardDistributed: true,
          opensAt: true,
          closesAt: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });
}

async function joinToLobbyAsUser({ userId, lobbyId }) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      Lobby: {
        select: { closesAt: true, isAwardDistributed: true },
      },
    },
  });

  const prevLobby = user?.Lobby;
  if (prevLobby?.isAwardDistributed === false || prevLobby?.closesAt > new Date()) {
    const err = new Error('Already joined a lobby in progress');
    err.status = 400;
    throw err;
  }

  const cashWalletReq = new cashWalletMsgs.AskCashBalanceRequest();
  cashWalletReq.setUserId(userId);

  const balance = await new Promise((resolve, reject) => {
    cashWalletClient.askCashBalance(cashWalletReq, (err, res) => {
      if (err) {
        return reject(err);
      }
      const balance = res.getBalance();
      return resolve(balance);
    });
  });

  const targetLobby = await prisma.lobby.findUnique({
    where: { id: lobbyId },
    select: {
      opensAt: true,
      requiredCashBalance: true,
    },
  });

  if (targetLobby.requiredCashBalance) {
    if (balance < targetLobby.requiredCashBalance) {
      const err = new Error('Insufficient cash balance');
      err.status = 400;
      throw err;
    }
  }

  if (new Date() > targetLobby.opensAt) {
    const err = new Error('Cannot join lobby after opening');
    err.status = 400;
    throw err;
  }

  await prisma.user.upsert({
    where: { id: userId },
    create: { initialCashBalance: balance, id: userId },
    update: { initialCashBalance: balance },
  });

  await prisma.lobby.update({
    where: { id: lobbyId },
    data: {
      users: {
        connect: { id: userId },
      },
    },
  });
}

module.exports = {
  getLobbyUser,
  joinToLobbyAsUser,
};
