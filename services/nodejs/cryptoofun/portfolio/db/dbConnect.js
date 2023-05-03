const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient({errorFormat: 'pretty'});

module.exports = {
    /**
     * @type {PrismaClient}
     */
    prisma
}