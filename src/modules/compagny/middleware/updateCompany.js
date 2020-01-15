const jwt = require('jsonwebtoken');
const updateCompany = require('../services/updateCompany');

module.exports = (req, res, next) => {
  const { id } = req.params;

  const { activityValue } = req.body;
  const { addressValue } = req.body;
  const { countryValue } = req.body;
  const { mail } = req.body;
  const { sirenValue } = req.body;


  const updatedCompany = {
    activity: activityValue,
    address: addressValue,
    country: countryValue,
    email: mail,
    siren: sirenValue,
  };

  updateCompany(id, updatedCompany)
    .then((user) => { // eslint-disable-next-line
      user.isAdmin = false;
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
