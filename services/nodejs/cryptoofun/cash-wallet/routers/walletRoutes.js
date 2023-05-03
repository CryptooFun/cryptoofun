const express = require('express');
const router = express.Router();

const {
    getWalletBalance,
    updateCashWallet,
    createCashWallet,
} = require('../controllers/walletController');

router.route('/balance').get(getWalletBalance);
router.route('/').put(updateCashWallet).post(createCashWallet);

module.exports = router;