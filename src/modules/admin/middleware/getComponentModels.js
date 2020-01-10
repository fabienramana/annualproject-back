const getComponentModels = require('../service/getComponentModels');


module.exports = (req, res, next) => {
  getComponentModels()
    .then((componentModels) => {
      res.json(componentModels);
    })
    .catch((err) => {
      next(err);
    });
};
