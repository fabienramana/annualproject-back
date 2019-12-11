const jwt = require('jsonwebtoken');
const createCompagny = require('../services/createCompagny.js');


module.exports = (req, res, next) => {
  const { activityValue } = req.body;
  const { addressValue } = req.body;
  const { countryValue } = req.body;
  const { mail } = req.body;
  const { password } = req.body;
  const { sirenValue } = req.body;

  createCompagny(mail, sirenValue, countryValue, addressValue, activityValue, password)
    .then((company) => {
      jwt.sign({ company }, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
        res.json({
          _id: company._id, // eslint-disable-line no-underscore-dangle
          email: company.email,
          siren: company.lastname,
          country: company.email,
          address: company.email,
          activity: company.email,
          token,
        });
      });
    })
    .catch((err) => {
      next(err);
    });
};
