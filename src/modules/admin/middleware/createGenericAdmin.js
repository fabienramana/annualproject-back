const createAdmin = require('../service/createGenericAdmin');


module.exports = (req, res, next) => {
  createAdmin()
    .then(() => {
      res.json({
        status: 'admin created!',
      });
    })
    .catch((err) => {
      next(err);
    });
};
