const { Queue, Worker, Job } = require('bullmq');
const { prisma } = require('../db');
const {
  askCashBalancePromisified,
  modifyCashBalancePromisified,
} = require('../grpc/clients/cashWallet');

const queue = new Queue('aftermath', {
  connection: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PWD,
  },
});

async function queryClosedLobbies() {
  try {
    return await prisma.$transaction(async tx => {
      const closedLobbies = await tx.lobby.findMany({
        where: {
          isAwardDistributed: false,
          atAftermathStage: false,
          closesAt: {
            lte: new Date().toISOString(),
          },
        },
        select: {
          id: true,
          cashAward: true,
          users: true,
        },
        take: 10,
      });

      for (const { id } of closedLobbies) {
        await tx.lobby.update({
          where: { id },
          data: {
            atAftermathStage: true,
          },
        });
      }

      if (closedLobbies.length > 0) {
        queue.add('closedLobbies', closedLobbies);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

const worker = new Worker('aftermath', processClosedLobby, {
  connection: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PWD,
  },
});

/**
 * @param {Job<{
 *  id: string;
 *  cashAward: number;
 *  users: {
 *    id: string;
 *    lobbyId: string;
 *    initialCashBalance: number;
 *  }[];
 * }[]>} job
 * */
async function processClosedLobby(job) {
  for (const lobby of job.data) {
    const profitsPerUsers = [];
    const bestProfit = {
      uid: '',
      value: -Infinity,
    };

    for (const u of lobby.users) {
      const cashBefore = u.initialCashBalance;
      let cashAfter;
      try {
        cashAfter = await askCashBalancePromisified(u.id);
      } catch (err) {
        console.error(err);
        throw err;
      }
      const profitPct = ((cashAfter - cashBefore) / cashBefore) * 100;

      if (profitPct > bestProfit.value) {
        bestProfit.uid = u.id;
        bestProfit.value = profitPct;
      }

      profitsPerUsers.push({
        userId: u.id,
        cashBefore,
        cashAfter,
        profitPct,
      });
    }

    await prisma.$transaction(async tx => {
      await tx.aftermath.create({
        data: {
          lobbyId: lobby.id,
          users: {
            create: profitsPerUsers,
          },
        },
      });

      const winner = bestProfit.uid;
      await modifyCashBalancePromisified(winner, lobby.cashAward);

      await tx.lobby.update({
        where: { id: lobby.id },
        data: { isAwardDistributed: true },
      });
    });
  }
}

module.exports = {
  queryClosedLobbies,
  aftermathQueue: queue,
  aftermathWorker: worker,
};
