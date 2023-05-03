const { PrismaClient } = require('@prisma/client-cash-wallet');

const prisma = new PrismaClient({ errorFormat: 'pretty' });

module.exports = {
  /**
   * @type {PrismaClient}
   */
  prisma,
};
