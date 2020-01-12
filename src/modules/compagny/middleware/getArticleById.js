const getArticleById = require('../services/getArticleById');

module.exports = (req, res, next) => {
  const { id } = req.params;

  getArticleById(id)
    .then((article) => {
      res.json(article);
    })
    .catch((err) => {
      next(err);
    });
};
