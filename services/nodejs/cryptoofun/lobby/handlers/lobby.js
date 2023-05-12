const { getLobbyById, searchLobbies } = require('../services/lobby');
const express = require('express');
const router = express.Router();

router.route('/lobby/id/:id').get(async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getLobbyById(id);
    if (data == null) {
      return res.sendStatus(404);
    }
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

router.route('/lobby').get(async (req, res, next) => {
  try {
    const { keyword, limit, cursorId } = req.query;
    const data = await searchLobbies({ title: keyword }, limit, cursorId);
    return res.json(data);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
