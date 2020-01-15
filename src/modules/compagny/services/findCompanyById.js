const { ObjectId } = require('mongodb');
const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.COMPANY))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }

      const err = new Error(`Company not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
