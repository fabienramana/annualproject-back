const bcrypt = require('bcrypt');
const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');
const findIfEmailExists = require('./findIfEmailExists');

module.exports = (email, password) => {
  if (password == null) {
    const err = new Error('Password is not set');
    err.name = 'Internal Error';
    err.status = 500;
    throw err;
  }
  const encryptedPassword = bcrypt.hashSync(password, 10);

  return findIfEmailExists(email)
    .then(connect)
    .then(db => db.collection(collections.ADMINISTRATEUR))
    .then(collection => collection.insertOne({
      email,
      password: encryptedPassword,
    }))
    .then(dbResponse => dbResponse.ops[0]);
};
