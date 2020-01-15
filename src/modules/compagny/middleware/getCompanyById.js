const findCompanyById = require('../services/findCompanyById');

module.exports = (req, res, next) => {
  const { id } = req.params;

  findCompanyById(id)
    .then((company) => {
      res.json(company);
    })
    .catch((err) => {
      next(err);
    });
};
