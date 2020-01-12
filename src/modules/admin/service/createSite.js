const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (name, activity, description, unitTime, createdAt, isEnable, companyId) => {
  return connect()
    .then(db => db.collection(collections.SITE))
    .then(collection => collection.insertOne({
      name,
      activity,
      description,
      unitTime,
      createdAt,
      isEnable,
      companyId,
    }))
    .then((dbResponse) => {
      if (dbResponse) {
        return 'success';
      }

      const err = new Error('Site not created');
      err.name = 'Internal Error';
      err.status = 500;
      throw err;
    });
};
