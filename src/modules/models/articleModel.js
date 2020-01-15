const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  name: joi.string().required(),
  description: joi.string().required(),
  price: joi.number().required(),
  siteId: joi.string().required(),
  imagePath: joi.string().required(),
});

const updateModel = joi.object().keys({
  name: joi.string(),
  description: joi.string(),
  price: joi.number(),
  siteId: joi.string(),
  imagePath: joi.string(),
});


module.exports = {
  createModel,
  updateModel,
};
