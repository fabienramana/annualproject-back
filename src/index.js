/* eslint-disable no-console */
const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const apiRouter = require('./services/api');
const notFound = require('./middleware/notFound');
const error = require('./middleware/error');



const server = express();
// Middlware Généraux
server.set('view engine','ejs');
server.use(helmet());
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


server.use(apiRouter);

server.use(notFound);
server.use(error);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});
