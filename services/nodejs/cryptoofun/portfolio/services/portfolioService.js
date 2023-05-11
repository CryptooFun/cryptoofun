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
