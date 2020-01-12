const getSitesByCompanyId = require('../service/getSitesByCompanyId');

module.exports = (req, res, next) => {
  const { id } = req.params;

  getSitesByCompanyId(id)
    .then((sites) => {
      res.json(sites);
    })
    .catch((err) => {
      next(err);
    });
};
