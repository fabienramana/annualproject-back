const { Router } = require('express');
const basicsRouter = require('../modules/basic/router');
const compagnyRouter = require('../modules/compagny/router');
const adminRouter = require('../modules/admin/router');

const router = new Router();

// Service  API
router.use('/api', basicsRouter);
router.use('/api', compagnyRouter);
router.use('/api', adminRouter);

module.exports = router;
