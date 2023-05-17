const { Queue, Worker, Job } = require('bullmq');
const { prisma } = require('../db');
const { askCashBalancePromisified } = require('../grpc/clients/cashWallet');

const queue = new Queue('opening', {
  connection: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

async function queryOpenedLobbies() {
  try {
    return await prisma.$transaction(async tx => {
      const openedLobbies = await tx.lobby.findMany({
        where: {
          atOpeningStage: false,
          opensAt: {
            lte: new Date().toISOString(),
          },
        },
        select: {
          id: true,
          requiredCashBalance: true,
          users: true,
        },
        take: 10,
      });

      for (const { id } of openedLobbies) {
        await tx.lobby.update({
          where: { id },
          data: {
            atOpeningStage: true,
          },
        });
      }

      if (openedLobbies.length > 0) {
        queue.add('openedLobbies', openedLobbies);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

const worker = new Worker('opening', processOpenedLobby, {
  connection: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

/**
 * @param {Job<{
 *  id: string;
 *  requiredCashBalance: number;
 *  users: {
 *    id: string;
 *    lobbyId: string;
 *    initialCashBalance: number;
 *  }[];
 * }[]>} job
 * */
async function processOpenedLobby(job) {
  for (const lobby of job.data) {
    await prisma.$transaction(async tx => {
      for (const u of lobby.users) {
        const balance = await askCashBalancePromisified(u.id);

        if (lobby.requiredCashBalance) {
          if (balance < lobby.requiredCashBalance) {
            // Remove user from the lobby
            await tx.user.update({
              where: { id: u.id },
              data: { lobbyId: null },
            });

            // ? Here you may want to send notification to user `Insufficient cash balance while joining to {lobby}`.
            continue;
          }
        }

        // Set initial cash wallet balance
        await prisma.user.update({
          where: { id: u.id },
          data: {
            initialCashBalance: balance,
          },
        });
      }
    });
  }
}

module.exports = {
  queryOpenedLobbies,
  openingQueue: queue,
  openingWorker: worker,
};
