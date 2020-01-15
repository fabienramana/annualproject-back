const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  password: joi.string().required(),
  mail: joi.string().required(),
});


module.exports = {
  createModel,
};
