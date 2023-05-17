-- AlterTable
ALTER TABLE "Lobby" ADD COLUMN     "atAftermathStage" BOOL NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Aftermath" (
    "id" STRING NOT NULL,
    "lobbyId" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Aftermath_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AftermathUser" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "cashBefore" FLOAT8 NOT NULL,
    "cashAfter" FLOAT8 NOT NULL,
    "profitPct" FLOAT8 NOT NULL,
    "aftermathId" STRING NOT NULL,

    CONSTRAINT "AftermathUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aftermath_lobbyId_key" ON "Aftermath"("lobbyId");

-- AddForeignKey
ALTER TABLE "Aftermath" ADD CONSTRAINT "Aftermath_lobbyId_fkey" FOREIGN KEY ("lobbyId") REFERENCES "Lobby"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AftermathUser" ADD CONSTRAINT "AftermathUser_aftermathId_fkey" FOREIGN KEY ("aftermathId") REFERENCES "Aftermath"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
