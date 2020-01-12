const updateSite = require('../service/updateSite');

module.exports = (req, res, next) => {
  const { id } = req.params;

  const { name } = req.body;
  const { activity } = req.body;
  const { description } = req.body;
  const { unitTime } = req.body;

  const updatedSite = {
    name,
    activity,
    description,
    unitTime,
  };

  updateSite(id, updatedSite)
    .then((message) => {
      res.json({
        message,
      });
    })
    .catch((err) => {
      next(err);
    });
};
