const getComponentModelById = require('../service/getComponentModelById');

module.exports = (req, res, next) => {
  const { id } = req.params;

  getComponentModelById(id)
    .then((componentModel) => {
      res.json(componentModel);
    })
    .catch((err) => {
      next(err);
    });
};
