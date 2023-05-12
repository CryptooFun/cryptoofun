const dayjs = require('dayjs');
const { PrismaClient, Prisma } = require('@prisma/client-lobby');
const prisma = new PrismaClient();

/** @type {Array<Prisma.UserCreateInput>} */
const Users = [
  {
    id: 'user-1',
    initialCashBalance: 99999803544.79997,
  },
];

const dateTomorrow = dayjs().add(1, 'day').toDate();
const dateAfter1Week = dayjs().add(1, 'week').toDate();
const dateAfter2Weeks = dayjs().add(2, 'weeks').toDate();

/** @type {Array<Prisma.LobbyCreateInput>} */
const Lobbies = [
  {
    id: 'f4aa611a-0424-4d13-8593-c689adf7fd50',
    title: 'Awesome Profit Challenge #1',
    challenge: 'BEST_PROFIT',
    cashAward: 1150,
    opensAt: dateTomorrow,
    closesAt: dateAfter1Week,
    users: { connect: { id: Users[0].id } },
  },
  {
    id: '5e206f82-1fd1-4d81-ba8b-c0f3551a5e1c',
    title: 'Yet Another Profit Challenge #1',
    challenge: 'BEST_PROFIT',
    cashAward: 250,
    opensAt: dateTomorrow,
    closesAt: dateAfter2Weeks,
  },
];

async function main() {
  for (const data of Users) {
    await prisma.user.create({ data });
  }
  for (const data of Lobbies) {
    await prisma.lobby.create({ data });
  }
}

main()
  .then(async () => {
    console.log('Done');
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
