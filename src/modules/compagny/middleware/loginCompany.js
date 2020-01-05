const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const findOneByEmail = require('../services/findOneByEmail');

module.exports = (req, res, next) => {
  findOneByEmail(req.body.mail)
    .then((company) => {
      bcrypt.compare(req.body.password, company.password, (err, res2) => {
        if (res2 === true) {
          jwt.sign({ company }, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
            res.json({
              token,
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
