const jwt = require('jsonwebtoken');
const createAdmin = require('../service/createAdmin');


module.exports = (req, res, next) => {
  const { mail } = req.body;
  const { password } = req.body;

  createAdmin(mail, password)
    .then((user) => { // eslint-disable-next-line
      user.isAdmin = true;
      jwt.sign({ user }, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
        res.json({
          token,
        });
      });
    })
    .catch((err) => {
      next(err);
    });
};
