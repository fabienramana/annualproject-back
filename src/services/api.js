const { Router } = require('express');
const basicsRouter = require('../modules/basic/router');
const compagnyRouter = require('../modules/compagny/router');

const router = new Router();

// Service  API
router.use('/api', basicsRouter);
router.use('/api', compagnyRouter);

module.exports = router;
