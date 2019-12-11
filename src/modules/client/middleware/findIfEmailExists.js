const findIfEmailExists = require('../services/findIfEmailExists');

module.exports = (req, res, next) => {
  
  const { mail } = req.params;
  findIfEmailExists(mail)
    .then((client) => {
      res.json(client);
    })
    .catch((err) => {
      next(err);
    });
};