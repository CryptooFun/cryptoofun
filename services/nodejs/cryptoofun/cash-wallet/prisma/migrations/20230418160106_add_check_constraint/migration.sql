ALTER TABLE "CashWallet" 
ADD CONSTRAINT "balance_check" 
CHECK (balance >= 0);