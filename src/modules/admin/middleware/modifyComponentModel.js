const modifyComponentModel = require('../service/modifyComponentModel');

module.exports = (req, res, next) => {
  const { id } = req.params;

  const { data } = req.body;
  const { numberOfPhotos } = req.body;
  const { numberOfTextFields } = req.body;
  const { typeOfComponent } = req.body;

  const componentModel = {
    data,
    numberOfPhotos,
    numberOfTextFields,
    typeOfComponent,
  };

  modifyComponentModel(id, componentModel)
    .then((updatedComponentModel) => {
      res.json(updatedComponentModel);
    })
    .catch((err) => {
      next(err);
    });
};
