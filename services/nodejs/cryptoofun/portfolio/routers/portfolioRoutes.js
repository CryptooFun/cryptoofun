const { extractJwtPayloadNoVerify } = require('shared/middleware/jwt');
const express = require('express');
const router = express.Router();

const { getPortolio } = require('../controllers/portfolioController');

router.route('/').get(extractJwtPayloadNoVerify, getPortolio);

module.exports = router;
