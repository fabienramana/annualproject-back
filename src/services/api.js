const { Router } = require('express');
const basicsRouter = require('../modules/basic/router');
const clientRouter = require("../modules/client/router")

const router = new Router();

// Service  API
router.use('/api', basicsRouter);
router.use('/api', clientRouter);

module.exports = router;
