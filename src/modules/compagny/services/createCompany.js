const bcrypt = require('bcrypt');
const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');
const findIfEmailExists = require('./findIfMailExists');

module.exports = (email, siren, country, address, activity, password) => {
  if (password == null) {
    const err = new Error('Password is not set');
    err.name = 'Internal Error';
    err.status = 500;
    throw err;
  }
  const encryptedPassword = bcrypt.hashSync(password, 10);

  return findIfEmailExists(email)
    .then(connect)
    .then(db => db.collection(collections.COMPANY))
    .then(collection => collection.insertOne({
      email,
      siren,
      country,
      password: encryptedPassword,
      address,
      activity,
    }))
    .then(dbResponse => dbResponse.ops[0]);
};
