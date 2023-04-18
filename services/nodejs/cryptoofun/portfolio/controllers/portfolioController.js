const { StatusCodes } = require('http-status-codes');
const {
    get,
    update,
    create,
} = require('../services/portfolioService');

const getPortolio = async (req, res) => {
    try {
        const {userId} = req.body;
        const portfolio = await get(userId);
        res.status(StatusCodes.OK).json({portfolio});
    }   
    catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});
    }
};

const updateSingleTicker = async (req, res) => {
    try {
        const {userId, ticker, cost, amount} = req.body;
        const singleTicker = await update(userId, ticker, cost, amount);
        res.status(StatusCodes.NO_CONTENT).json({singleTicker});
    }   
    catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});
    }
};

const createSingleTicker = async (req, res) => {
    try {
        const {userId, ticker, cost, amount} = req.body;
        const singleTicker = await create(userId, ticker, cost, amount);
        res.status(StatusCodes.OK).json({singleTicker});
    }   
    catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {
    getPortolio,
    updateSingleTicker,
    createSingleTicker,
}