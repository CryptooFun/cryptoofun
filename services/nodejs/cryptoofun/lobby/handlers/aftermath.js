const { getAftermathByLobbyId, getAftermathsByUserId } = require('../services/aftermath');
const { extractJwtPayloadNoVerify } = require('shared/middleware/jwt');
const express = require('express');
const router = express.Router();

router.route('/lobby/id/:id/aftermath').get(async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getAftermathByLobbyId(id);
    if (data == null) {
      return res.sendStatus(404);
    }
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

router.route('/lobby/me/aftermath').get(extractJwtPayloadNoVerify, async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const data = await getAftermathsByUserId(userId);
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
