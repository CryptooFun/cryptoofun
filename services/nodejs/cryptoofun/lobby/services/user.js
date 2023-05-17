const { prisma } = require('../db');

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

  const targetLobby = await prisma.lobby.findUnique({
    where: { id: lobbyId },
    select: { opensAt: true },
  });

  if (new Date() > targetLobby.opensAt) {
    const err = new Error('Cannot join lobby after opening');
    err.status = 400;
    throw err;
  }

  await prisma.lobby.update({
    where: { id: lobbyId },
    data: {
      users: {
        connectOrCreate: {
          create: { id: userId, initialCashBalance: -1 },
          where: { id: userId },
        },
      },
    },
  });
}

module.exports = {
  getLobbyUser,
  joinToLobbyAsUser,
};
