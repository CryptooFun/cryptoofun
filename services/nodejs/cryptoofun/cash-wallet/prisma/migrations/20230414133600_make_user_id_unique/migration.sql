/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `CashWallet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CashWallet" ALTER COLUMN "balance" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "CashWallet_userId_key" ON "CashWallet"("userId");
