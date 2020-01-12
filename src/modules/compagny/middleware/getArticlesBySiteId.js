const getArticlesBySiteId = require('../services/getArticlesBySiteId');

module.exports = (req, res, next) => {
  const { siteId } = req.params;

  getArticlesBySiteId(siteId)
    .then((articles) => {
      res.json(articles);
    })
    .catch((err) => {
      next(err);
    });
};
