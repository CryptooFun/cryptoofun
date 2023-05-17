const { prisma } = require('../db');

async function getAftermathByLobbyId(lobbyId) {
  return await prisma.aftermath.findUnique({
    where: { lobbyId },
    include: {
      users: true,
      Lobby: true,
    },
  });
}

async function getAftermathsByUserId(userId) {
  return await prisma.aftermathUser.findMany({
    where: { userId },
    include: {
      Aftermath: {
        include: {
          _count: {
            select: {
              users: true,
            },
          },
        },
      },
    },
  });
}

module.exports = {
  getAftermathByLobbyId,
  getAftermathsByUserId,
};
