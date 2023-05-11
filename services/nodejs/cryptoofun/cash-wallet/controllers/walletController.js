const { StatusCodes } = require('http-status-codes');
const { getOrCreateWallet } = require('../services/walletService');

const getWallet = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const wallet = await getOrCreateWallet(userId);
    return res.status(StatusCodes.OK).json(wallet);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  }
};

module.exports = {
  getWallet,
};
