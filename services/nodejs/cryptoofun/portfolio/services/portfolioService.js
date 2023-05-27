const { prisma } = require('../db/dbConnect');

const get = async userId => {
  const portfolio = await prisma.portfolio.findMany({
    where: { userId },
    select: {
      ticker: true,
      cost: true,
      amount: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return portfolio;
};

const update = async (userId, ticker, cost, amount) => {
  const tickerRecord = await prisma.portfolio.findFirst({
    where: { userId, ticker },
  });

  if (tickerRecord == null) {
    if (amount < 0) {
      throw new Error('Insufficient amount to be able to sell.');
    }

    // If a ticker symbol does not exist in user's portfolio
    return await prisma.portfolio.create({
      data: {
        userId,
        ticker,
        cost,
        amount,
      },
    });
  }

  if (tickerRecord.amount + amount == 0) {
    return await prisma.portfolio.deleteMany({
      where: {
        userId,
        ticker,
      },
    });
  }

  if (tickerRecord.amount + amount < 0) {
    throw new Error('Insufficient amount to be able to sell.');
  }

  return await prisma.portfolio.updateMany({
    where: {
      userId,
      ticker,
    },
    data: {
      cost: {
        increment: cost,
      },
      amount: {
        increment: amount,
      },
    },
  });
};

module.exports = {
  get,
  update,
};
