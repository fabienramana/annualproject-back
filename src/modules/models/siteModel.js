const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  name: joi.string().required(),
  activity: joi.number().required(),
  description: joi.number().required(),
  unitTime: joi.string().required(),
  createdAt: joi.date().required(),
  isEnable: joi.boolean().required(),
  companyId: joi.string().required(),
});

const updateModel = joi.object().keys({
  name: joi.string(),
  activity: joi.number(),
  description: joi.number(),
  unitTime: joi.string(),
  createdAt: joi.date(),
  isEnable: joi.boolean(),
  companyId: joi.string(),
});


module.exports = {
  createModel,
  updateModel,
};
