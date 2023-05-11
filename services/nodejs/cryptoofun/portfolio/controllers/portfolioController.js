const { StatusCodes } = require('http-status-codes');
const { get } = require('../services/portfolioService');

const getPortolio = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const portfolio = await get(userId);
    res.status(StatusCodes.OK).json({ portfolio });
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  }
};

module.exports = {
  getPortolio,
};
