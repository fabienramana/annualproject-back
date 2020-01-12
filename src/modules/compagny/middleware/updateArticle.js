const updateArticle = require('../services/updateArticle');

module.exports = (req, res, next) => {
  const { id } = req.params;

  const { name } = req.body;
  const { description } = req.body;
  const { price } = req.body;

  const updatedArticle = {
    name,
    description,
    price,
  };

  updateArticle(id, updatedArticle)
    .then((message) => {
      res.json({
        message,
      });
    })
    .catch((err) => {
      next(err);
    });
};
