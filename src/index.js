const express =  require('express')
const notFound= require('../src/middleware/notFound')
const error = require('../src/middleware/error')
const config = require('config')


const server = express()

//middleware errors
server.use(error)

server.use(notFound)

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});