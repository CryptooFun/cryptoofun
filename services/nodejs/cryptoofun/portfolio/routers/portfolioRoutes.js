const { extractJwtPayloadNoVerify } = require('shared/middleware/jwt');
const express = require('express');
const router = express.Router();

const {
  getPortolio,
  updateSingleTicker,
  createSingleTicker,
} = require('../controllers/portfolioController');

router.route('/portfolio').get(extractJwtPayloadNoVerify, getPortolio);
router
  .route('/')
  .put(extractJwtPayloadNoVerify, updateSingleTicker)
  .post(extractJwtPayloadNoVerify, createSingleTicker);

module.exports = router;
