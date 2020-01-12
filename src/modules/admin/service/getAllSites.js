const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = () => {
  return connect()
    .then(db => db.collection(collections.SITE))
    .then(collection => collection.find())
    .then(cursor => cursor.toArray());
};
