const {PrismaClient} = require('@prisma/client-2');

const prisma = new PrismaClient({errorFormat: 'pretty'});

module.exports = {
    /**
     * @type {PrismaClient}
     */
    prisma
}