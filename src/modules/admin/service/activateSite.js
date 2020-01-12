const { ObjectId } = require('mongodb');
const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');
const findOne = require('./getSiteById');

module.exports = (id, siteToActivate) => {
  return connect()
    .then(db => db.collection(collections.SITE))
    .then(collection => collection.updateOne({
      _id: ObjectId(id),
    }, { $set: siteToActivate }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOne(id);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
