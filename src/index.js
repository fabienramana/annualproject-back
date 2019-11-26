const express = require('express');
const config = require('config');
const notFound = require('../src/middleware/notFound');
const error = require('../src/middleware/error');
const apiRouter = require('./services/api');


const server = express();

// middleware errors

server.use(apiRouter);

server.use(notFound);
server.use(error);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});
