const deleteArticle = require('../services/deleteArticle');


module.exports = (req, res, next) => {
  const { id } = req.params;
  deleteArticle(id) // eslint-disable-line no-underscore-dangle
    .then(data => res.json({
      message: data,
    }))
    .catch((err) => {
      next(err);
    });
};
