const { prisma } = require('../db/dbConnect');

const FREE_CREDITS_FOR_NEWBIES = 50_000;

const getBalance = async userId => {
  const cashWallet = await prisma.cashWallet.findUnique({
    where: { userId },
    select: {
      balance: true,
    },
  });
  if (cashWallet == null) {
    return 0;
  }
  return cashWallet.balance;
};

const getBalancebyDescending = async (skip, take) => {
  const balances = await prisma.cashWallet.findMany({
    skip,
    take,
    select: {
      userId: true,
      balance: true,
    },
    orderBy: {
      balance: 'desc',
    },
  });
  return balances;
};

const getOrCreateWallet = async userId => {
  const cashWallet = await prisma.cashWallet.findUnique({
    where: { userId },
    select: {
      userId: true,
      balance: true,
      updatedAt: true,
    },
  });
  if (cashWallet == null) {
    return await upsert(userId, 0);
  }
  return cashWallet;
};

const upsert = async (userId, delta) => {
  const cashWallet = await prisma.cashWallet.findUnique({ where: { userId } });

  // Create new wallet if not exists
  if (cashWallet == null) {
    const newWallet = await prisma.cashWallet.create({
      data: {
        userId,
        balance: FREE_CREDITS_FOR_NEWBIES + delta,
      },
    });
    return newWallet;
  }

  const updatedWallet = await prisma.cashWallet.update({
    where: { userId },
    data: {
      balance: {
        increment: delta,
      },
    },
  });
  return updatedWallet;
};

module.exports = {
  getBalance,
  getBalancebyDescending,
  getOrCreateWallet,
  upsert,
};
