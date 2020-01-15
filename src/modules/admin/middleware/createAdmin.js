const createAdmin = require('../service/createAdmin');


module.exports = (req, res, next) => {
  const { mail } = req.body;
  const { password } = req.body;

  createAdmin(mail, password)
    .then(() => {
      res.json({
        status: 'admin created!',
      });
    })
    .catch((err) => {
      next(err);
    });
};
