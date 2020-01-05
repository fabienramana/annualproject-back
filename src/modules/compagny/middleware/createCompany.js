const jwt = require('jsonwebtoken');
const createCompany = require('../services/createCompany.js');


module.exports = (req, res, next) => {
  const { activityValue } = req.body;
  const { addressValue } = req.body;
  const { countryValue } = req.body;
  const { mail } = req.body;
  const { password } = req.body;
  const { sirenValue } = req.body;

  createCompany(mail, sirenValue, countryValue, addressValue, activityValue, password)
    .then((company) => {
      jwt.sign({ company }, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
        res.json({
          token,
        });
      });
    })
    .catch((err) => {
      next(err);
    });
};
