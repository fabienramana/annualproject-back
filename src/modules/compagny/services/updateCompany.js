const { ObjectId } = require('mongodb');
const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');
const findOne = require('./findCompanyById');

module.exports = (id, updatedCompany) => {
  return connect()
    .then(db => db.collection(collections.COMPANY))
    .then(collection => collection.updateOne({
      _id: ObjectId(id),
    }, { $set: updatedCompany }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOne(id);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
