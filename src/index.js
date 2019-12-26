const express = require('express');
const config = require('config');
const cors = require('cors');
const bodyParser = require('body-parser');

const notFound = require('../src/middleware/notFound');
const error = require('../src/middleware/error');
const apiRouter = require('./services/api');

const server = express();

// middleware errors

server.use(cors());
server.use(bodyParser.json());

server.use(apiRouter);

server.use(notFound);
server.use(error);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});
