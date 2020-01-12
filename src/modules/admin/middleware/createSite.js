const createSite = require('../service/createSite');


module.exports = (req, res, next) => {
  const { name } = req.body;
  const { activity } = req.body;
  const { description } = req.body;
  const { unitTime } = req.body;
  const { createdAt } = req.body;
  const { isEnable } = req.body;
  const { companyId } = req.body;

  createSite(name, activity, description, unitTime, createdAt, isEnable, companyId)
    .then((message) => {
      res.json({
        message,
      });
    })
    .catch((err) => {
      next(err);
    });
};
