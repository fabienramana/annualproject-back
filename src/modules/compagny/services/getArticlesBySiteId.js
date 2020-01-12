const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (siteId) => {
  return connect()
    .then(db => db.collection(collections.ARTICLE))
    .then(collection => collection.find({ siteId }))
    .then(cursor => cursor.toArray());
};
