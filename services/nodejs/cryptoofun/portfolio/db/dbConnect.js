const { PrismaClient } = require('@prisma/client-portfolio');

const prisma = new PrismaClient({ errorFormat: 'pretty' });

module.exports = {
  /**
   * @type {PrismaClient}
   */
  prisma,
};
