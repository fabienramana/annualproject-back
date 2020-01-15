const express = require('express');
const config = require('config');
const cors = require('cors');
const bodyParser = require('body-parser');

const multer = require('multer');
const mkdirp = require('mkdirp');
const notFound = require('../src/middleware/notFound');
const error = require('../src/middleware/error');
const apiRouter = require('./services/api');

const URL = 'https://annualproject-back.herokuapp.com/';

const server = express();

server.use(express.static('public'));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const dir = './public/images/uploads';
    mkdirp(dir, err => callback(err, dir));
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// middleware errors

server.use(cors());
server.use(bodyParser.json());

server.use(apiRouter);

server.post('/file', upload.single('file'), (req, res, next) => {
  if (req.file) {
    res.json({ imageUrl: `${URL}images/uploads/${req.file.filename}` });
  } else {
    const err = new Error('No File uploaded');
    next(err);
  }
});

server.use(notFound);
server.use(error);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});
