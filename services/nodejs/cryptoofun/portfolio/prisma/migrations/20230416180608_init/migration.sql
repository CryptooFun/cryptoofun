-- CreateTable
CREATE TABLE "Portfolio" (
    "id" STRING NOT NULL,
    "userId" STRING NOT NULL,
    "ticker" STRING NOT NULL,
    "cost" FLOAT8 NOT NULL,
    "amount" FLOAT8 NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);
