const getSiteById = require('../service/getSiteById');

module.exports = (req, res, next) => {
  const { id } = req.params;

  getSiteById(id)
    .then((site) => {
      res.json(site);
    })
    .catch((err) => {
      next(err);
    });
};
