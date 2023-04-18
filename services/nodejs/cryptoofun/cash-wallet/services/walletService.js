const {prisma} = require('../db/dbConnect');

const get = async (userId) => {
    const {balance} = await prisma.cashWallet.findUnique({
      where: { userId },
      select: {
        balance: true,
      },
    })
    return balance;
};

const update = async (userId, delta) => {
    const cashWallet = await prisma.cashWallet.update({
        where: { userId },
        data: {
            balance: {
                increment: delta,
            }
        }
    })
    return cashWallet;
};

const create = async (userId) => {
    const cashWallet = await prisma.cashWallet.create({
        data: {
            userId,
        }
    })
    return cashWallet;
};

module.exports = {
    get,
    update,
    create,
};