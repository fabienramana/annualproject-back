const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  data: joi.string().required(),
  numberOfPhotos: joi.number().required(),
  numberOfTextFields: joi.number().required(),
  typeOfComponent: joi.string().required(),
});

const updateModel = joi.object().keys({
  data: joi.string(),
  numberOfPhotos: joi.number(),
  numberOfTextFields: joi.number(),
  typeOfComponent: joi.string(),
});


module.exports = {
  createModel,
  updateModel,
};
