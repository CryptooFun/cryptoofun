const { StatusCodes } = require('http-status-codes');
const {
    get,
    update,
    create
} = require('../services/walletService');

const getWalletBalance = async (req, res) => {
    try {
        const {userId} = req.body;
        const balance = await get(userId);
        res.status(StatusCodes.OK).json({balance});
    }   
    catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});
    }
};

const updateCashWallet = async (req, res) => {
    try {
        const {userId, delta} = req.body;
        const cashWallet = await update(userId, delta);
        res.status(StatusCodes.NO_CONTENT).json({cashWallet});
    }   
    catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});
    }
};

const createCashWallet = async (req, res) => {
    try {
        const {userId} = req.body;
        const cashWallet = await create(userId);
        res.status(StatusCodes.OK).json({cashWallet});
    }   
    catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};

module.exports = {
    getWalletBalance,
    updateCashWallet,
    createCashWallet,
}