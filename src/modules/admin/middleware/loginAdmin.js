const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const findOneByEmail = require('../service/findOneByEmail');

module.exports = (req, res, next) => {
  findOneByEmail(req.body.mail)
    .then((user) => {
      bcrypt.compare(req.body.password, user.password, (err, res2) => {
        if (res2 === true) {
          jwt.sign({ user }, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
            res.json({
              token,
              isAdmin: true,
            });
          });
        } else if (res2 === false) {
          res.json({
            error: 'Error authenticating',
          });
        } else if (err) {
          res.json({
            error: 'Error authenticating',
          });
        }
      });
    })
    .catch((errFinal) => {
      next(errFinal);
    });
};
