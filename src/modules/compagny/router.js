const { Router } = require('express');
const createCompany = require('./middleware/createCompany');
const loginCompany = require('./middleware/loginCompany');

const router = new Router();

// Service  API

router.route('/create_company')
  .post(createCompany);

router.route('/login_company')
  .post(loginCompany);


module.exports = router;
