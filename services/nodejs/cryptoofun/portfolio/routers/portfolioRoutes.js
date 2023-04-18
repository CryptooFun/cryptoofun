const express = require('express');
const router = express.Router();

const {
    getPortolio,
    updateSingleTicker,
    createSingleTicker,
} = require('../controllers/portfolioController');

router.route('/portfolio').get(getPortolio);
router.route('/').put(updateSingleTicker).post(createSingleTicker);

module.exports = router;