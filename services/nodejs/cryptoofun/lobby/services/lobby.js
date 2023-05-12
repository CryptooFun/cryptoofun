const { prisma } = require('../db');

async function getLobbyById(lobbyId) {
  return await prisma.lobby.findUnique({ where: { id: lobbyId } });
}

async function searchLobbies({ title }, take = 12, cursorId = null) {
  // Return nothing if the title keyword's provided but does not satisfy >= 3 characters.
  if (title.length >= 1 && title.length < 3) {
    return [];
  }

  take = Number(take);
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
        gt: new Date(),
      },
      title: {
        contains: title,
        mode: 'insensitive',
      },
    },
    orderBy: {
      opensAt: 'desc',
    },
    cursor: cursorId ? { id: cursorId } : undefined,
    take,
  });
}

async function awardTheWinner(lobbyId, userId) {
  // TODO: ...
}

module.exports = {
  getLobbyById,
  searchLobbies,
  awardTheWinner,
};
