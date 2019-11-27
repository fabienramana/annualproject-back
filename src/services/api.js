const { Router } = require('express');
const basicsRouter = require('../modules/basic/router');

const router = new Router();

// Service  API
router.use('/api', basicsRouter);

module.exports = router;
