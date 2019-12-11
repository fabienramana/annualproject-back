const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  firstname: joi.string(),
  lastname: joi.string(),
  password: joi.string().required(),
  email: joi.string().required(),
}).with('firstname', 'lastname');


module.exports = {createModel};