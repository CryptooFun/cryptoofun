const {prisma} = require('../db/dbConnect');

const get = async (userId) => {
    const portfolio = await prisma.portfolio.findMany({
        where: { userId },
        select: {
            ticker: true,
            cost: true,
            amount: true,
        }
    });
    return portfolio;   
};

const update = async (userId, ticker, cost, amount) => {
    const singleTicker = await prisma.portfolio.updateMany({
        where: {
            userId,
            ticker
        },
        data: {
            cost: {
                increment: cost,
            },
            amount: {
                increment: amount,
            }
        }
    });
    return singleTicker;
};

const create = async (userId, ticker, cost, amount) => {
    const singleTicker = await prisma.portfolio.create({
        data: {
            userId,
            ticker,
            cost,
            amount,
        }
    })
    return singleTicker;
};

module.exports = {
    get,
    update,
    create,
};