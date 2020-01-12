const { ObjectId } = require('mongodb');
const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.ARTICLE))
    .then(collection => collection.deleteOne({ _id: ObjectId(id) }))
    .then((dbResponse) => {
      if (dbResponse.deletedCount === 1) {
        return 'success';
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
