const jwt = require("jsonwebtoken");

function extractJwtPayloadNoVerify(req, res, next) {
  const authnHeader = req.headers["authorization"];
  const token = authnHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const { sub } = jwt.decode(token, { json: true });
    req.user = { id: sub };
    next();
  } catch (_err) {
    return res.sendStatus(403);
  }
}

module.exports = {
  extractJwtPayloadNoVerify,
};
