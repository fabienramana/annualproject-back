const activateSite = require('../service/activateSite');


module.exports = (req, res, next) => {
  const { id } = req.params;
  const siteToActivate = {
    isEnable: true,
  };

  activateSite(id, siteToActivate)
    .then((activatedSite) => {
      res.json({
        activatedSite,
      });
    })
    .catch((err) => {
      next(err);
    });
};
