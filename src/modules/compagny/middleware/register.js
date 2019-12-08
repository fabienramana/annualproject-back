const createOne = require('../services/register');

module.exports = (req, res, next) => {
  const compagnyToCreate = req.body;

  createOne(compagnyToCreate)
    .then((compagny) => {
      res.json(compagny);
    })
    .catch((err) => {
      next(err);
    });
};
