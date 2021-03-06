const createComponentModel = require('../service/createComponentModel');


module.exports = (req, res, next) => {
  const { data } = req.body;
  const { numberOfPhotos } = req.body;
  const { numberOfTextFields } = req.body;
  const { typeOfComponent } = req.body;

  createComponentModel(data, numberOfPhotos, numberOfTextFields, typeOfComponent)
    .then((message) => {
      res.json({
        message,
      });
    })
    .catch((err) => {
      next(err);
    });
};
