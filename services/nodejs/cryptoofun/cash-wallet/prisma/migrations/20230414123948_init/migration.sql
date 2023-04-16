-- CreateTable
CREATE TABLE "CashWallet" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "balance" FLOAT8 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CashWallet_pkey" PRIMARY KEY ("id")
);
