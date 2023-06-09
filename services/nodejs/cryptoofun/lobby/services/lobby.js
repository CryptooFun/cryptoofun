const { prisma } = require('../db');

async function getLobbyById(lobbyId) {
  return await prisma.lobby.findUnique({ where: { id: lobbyId } });
}

async function searchLobbies({ title }, take, cursorId = null) {
  take = Number(take) || 12;
  // Do not allow to search for more than 20 records (becuase of performance concerns).
  const TakeConstraintMax = 20;
  if (take > TakeConstraintMax) {
    take = TakeConstraintMax;
  }

  return await prisma.lobby.findMany({
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
      _count: { select: { users: true } },
    },
    where: {
      opensAt: {
        gt: new Date().toISOString(),
      },
      title: {
        contains: title,
        mode: 'insensitive',
      },
    },
    orderBy: {
      opensAt: 'asc',
    },
    cursor: cursorId ? { id: cursorId } : undefined,
    take,
  });
}

module.exports = {
  getLobbyById,
  searchLobbies,
};
