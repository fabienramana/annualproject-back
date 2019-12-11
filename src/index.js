const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const notFound = require('../src/middleware/notFound');
const error = require('../src/middleware/error');
const apiRouter = require('./services/api');
const jwt = require('jsonwebtoken')
const assignToken = require('./services/assignToken')



const server = express();


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())


// middleware errors


server.use(apiRouter)




server.post('/api/posts', assignToken, (req, res) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'post created',
        authData,
      });
    }
  });
});

server.use(notFound);
server.use(error);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
  
});
