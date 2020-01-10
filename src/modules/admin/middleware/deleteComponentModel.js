const deleteComponentModel = require('../service/deleteComponentModel');


module.exports = (req, res, next) => {
  const { id } = req.params;
  deleteComponentModel(id) // eslint-disable-line no-underscore-dangle
    .then(data => res.json({
      message: data,
    }))
    .catch((err) => {
      next(err);
    });
};
