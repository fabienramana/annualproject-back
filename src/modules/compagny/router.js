const { Router } = require('express');
const createOne = require('./middleware/register');

const router = new Router();

router.route('/compagny')
  .post(createOne);


module.exports = router;
