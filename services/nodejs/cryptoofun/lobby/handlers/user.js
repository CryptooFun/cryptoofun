const { getLobbyUser, joinToLobbyAsUser } = require('../services/user');
const { extractJwtPayloadNoVerify } = require('shared/middleware/jwt');
const express = require('express');
const router = express.Router();

router.route('/lobby/me').get(extractJwtPayloadNoVerify, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const data = await getLobbyUser(userId);
    if (data == null) {
      return res.sendStatus(404);
    }
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

router.route('/lobby/join').post(extractJwtPayloadNoVerify, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { lobbyId } = req.body;
    const data = await joinToLobbyAsUser({ userId, lobbyId });
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
