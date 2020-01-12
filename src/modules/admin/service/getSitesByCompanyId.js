const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (companyId) => {
  return connect()
    .then(db => db.collection(collections.SITE))
    .then(collection => collection.find({ companyId }))
    .then(cursor => cursor.toArray());
};
