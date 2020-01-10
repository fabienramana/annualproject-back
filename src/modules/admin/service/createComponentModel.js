const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (data, numberOfPhotos, numberOfTextFields) => {
  return connect()
    .then(db => db.collection(collections.COMPOSANT_MODEL))
    .then(collection => collection.insertOne({
      data,
      numberOfPhotos,
      numberOfTextFields,
    }))
    .then((dbResponse) => {
      if (dbResponse) {
        return 'success';
      }
      return 'failure';
    });
};
