const bcrypt = require('bcrypt');
const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');
const findIfEmailExists = require('./findIfEmailExists');

module.exports = () => {
  const encryptedPassword = bcrypt.hashSync('admin', 10);

  return findIfEmailExists('admin@api.com')
    .then(connect)
    .then(db => db.collection(collections.ADMINISTRATEUR))
    .then(collection => collection.insertOne({
      email: 'admin@api.com',
      password: encryptedPassword,
    }))
    .then(dbResponse => dbResponse.ops[0]);
};
