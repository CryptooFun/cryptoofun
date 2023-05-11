const express = require('express');
const { StatusCodes } = require('http-status-codes');
const redisCli = require('./redisdb');
const router = express.Router();

router.route('/').get(async (req, res) => {
  try {
    const top100 = await redisCli.zrevrange('cf_leaderboard', 0, 99, 'WITHSCORES');

    const leaderboard = [];

    for (let i = 0; i < top100.length; i += 2) {
      const userName = top100[i].split(':')[1];
      leaderboard.push({ userName, balance: top100[i + 1] });
    }

    return res.json(leaderboard);
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
});

module.exports = router;
