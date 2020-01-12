const deactivateSite = require('../service/deactivateSite');


module.exports = (req, res, next) => {
  const { id } = req.params;
  const siteToActivate = {
    isEnable: false,
  };

  deactivateSite(id, siteToActivate)
    .then((deactivatedSite) => {
      res.json({
        deactivatedSite,
      });
    })
    .catch((err) => {
      next(err);
    });
};
