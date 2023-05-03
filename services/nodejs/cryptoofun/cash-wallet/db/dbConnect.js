const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
    /**
     * @type {PrismaClient}
     */
    prisma
}