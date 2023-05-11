const { extractJwtPayloadNoVerify } = require('shared/middleware/jwt');
const express = require('express');
const router = express.Router();

const { getWallet } = require('../controllers/walletController');

router.route('/').get(extractJwtPayloadNoVerify, getWallet);

module.exports = router;
