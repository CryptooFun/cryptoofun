const { PrismaClient } = require('@prisma/client-lobby');
const prisma = new PrismaClient();

function main() {
  console.log('Purges all "lobby, user" data from database! Are you sure? [y/N]');

  process.stdin
    .setRawMode(true)
    .setEncoding('utf8')
    .resume()
    .on('data', async key => {
      if (key.toString().toLowerCase() != 'y') {
        console.log('Aborting...');
        process.exit(0);
      }

      try {
        console.log('\nPurging...');
        await prisma.lobby.deleteMany({});
        await prisma.user.deleteMany({});

        await prisma.$disconnect();
        console.log('Done');
        process.exit(0);
      } catch (err) {
        console.error('[error]', err);
        await prisma.$disconnect();
        process.exit(1);
      }
    });
}

main();
