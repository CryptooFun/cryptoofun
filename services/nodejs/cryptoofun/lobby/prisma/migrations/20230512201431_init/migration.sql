-- CreateEnum
CREATE TYPE "Challenge" AS ENUM ('BEST_PROFIT');

-- CreateTable
CREATE TABLE "Lobby" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "description" STRING,
    "requiredCashBalance" FLOAT8,
    "challenge" "Challenge" NOT NULL,
    "cashAward" FLOAT8 NOT NULL,
    "isAwardDistributed" BOOL NOT NULL DEFAULT false,
    "opensAt" TIMESTAMP(3) NOT NULL,
    "closesAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lobby_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "initialCashBalance" FLOAT8 NOT NULL,
    "lobbyId" STRING,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lobbyId_fkey" FOREIGN KEY ("lobbyId") REFERENCES "Lobby"("id") ON DELETE SET NULL ON UPDATE CASCADE;
