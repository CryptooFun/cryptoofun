const { extractJwtPayloadNoVerify } = require('shared/middleware/jwt');
const express = require('express');
const router = express.Router();

const {
  getWalletBalance,
  getBalancesbyDesc,
  updateCashWallet,
  createCashWallet,
} = require('../controllers/walletController');

router.route('/balance').get(extractJwtPayloadNoVerify, getWalletBalance);
router.route('/balances').get(getBalancesbyDesc);
router
  .route('/')
  .put(extractJwtPayloadNoVerify, updateCashWallet)
  .post(extractJwtPayloadNoVerify, createCashWallet);

module.exports = router;
