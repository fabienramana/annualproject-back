const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  activityValue: joi.string().required(),
  addressValue: joi.string().required(),
  countryValue: joi.number().required(),
  mail: joi.string().required(),
  password: joi.string().required(),
  sirenValue: joi.number().required(),
});

const updateModel = joi.object().keys({
  activityValue: joi.string(),
  addressValue: joi.string(),
  countryValue: joi.number(),
  mail: joi.string(),
  password: joi.string(),
  sirenValue: joi.number(),
});


module.exports = {
  createModel,
  updateModel,
};
