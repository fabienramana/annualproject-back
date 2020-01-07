const { Router } = require('express');
const loginAdmin = require('./middleware/loginAdmin');
const createAdmin = require('./middleware/createAdmin');
const createGenericAdmin = require('./middleware/createGenericAdmin');

const router = new Router();

// Service  API

router.route('/login_admin')
  .post(loginAdmin);

router.route('/create_admin')
  .post(createAdmin);

router.route('/create_generic_admin')
  .post(createGenericAdmin);

module.exports = router;
