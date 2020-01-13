const createArticle = require('../services/createArticle');


module.exports = (req, res, next) => {
  const { name } = req.body;
  const { description } = req.body;
  const { price } = req.body;
  const { siteId } = req.body;
  const { imagePath } = req.body;

  createArticle(name, description, price, siteId, imagePath)
    .then((message) => {
      res.json({
        message,
      });
    })
    .catch((err) => {
      next(err);
    });
};
