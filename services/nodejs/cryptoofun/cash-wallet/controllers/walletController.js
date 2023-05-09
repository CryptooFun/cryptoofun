const { StatusCodes } = require('http-status-codes');
const { get, getBalancebyDescending, update, create } = require('../services/walletService');

const getWalletBalance = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const balance = await get(userId);
    res.status(StatusCodes.OK).json({ balance });
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  }
};

const getBalancesbyDesc = async (req, res) => {
  try {
    const { offset, limit } = req.body;
    const balances = await getBalancebyDescending(offset, limit);
    res.status(StatusCodes.OK).json({ balances });
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  }
};

const updateCashWallet = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { delta } = req.body;
    const cashWallet = await update(userId, delta);
    res.status(StatusCodes.NO_CONTENT).json({ cashWallet });
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  }
};

const createCashWallet = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const cashWallet = await create(userId);
    res.status(StatusCodes.OK).json({ cashWallet });
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  getWalletBalance,
  getBalancesbyDesc,
  updateCashWallet,
  createCashWallet,
};
