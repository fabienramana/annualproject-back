const getAllSites = require('../service/getAllSites');

module.exports = (req, res, next) => {
  getAllSites()
    .then((sites) => {
      res.json(sites);
    })
    .catch((err) => {
      next(err);
    });
};
