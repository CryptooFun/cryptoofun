const { PrismaClient } = require('@prisma/client-lobby');

const prisma = new PrismaClient({ errorFormat: 'pretty' });

module.exports = {
  /**
   * @type {PrismaClient}
   */
  prisma,
};
