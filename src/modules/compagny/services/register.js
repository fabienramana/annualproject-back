const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (compagnyToCreate) => {
  return createModel.validate(compagnyToCreate)
    .then(() => connect())
    .then(db => db.collection(collections.compagny))
    .then(collection => collection.insertOne(compagnyToCreate))
    .then(dbResponse => dbResponse.ops[0]);
};
