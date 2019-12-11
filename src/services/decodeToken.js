const jwt = require('jsonwebtoken');

function decodeToken(req) {
  const clientDecoded = jwt.decode(req.token);
  const client = clientDecoded;
  return client;
}

module.exports = decodeToken;