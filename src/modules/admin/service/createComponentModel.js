const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (data, numberOfPhotos, numberOfTextFields, typeOfComponent) => {
  return connect()
    .then(db => db.collection(collections.COMPOSANT_MODEL))
    .then(collection => collection.insertOne({
      data,
      numberOfPhotos,
      numberOfTextFields,
      typeOfComponent,
    }))
    .then((dbResponse) => {
      if (dbResponse) {
        return 'success';
      }

      const err = new Error('Component model not created');
      err.name = 'Internal Error';
      err.status = 500;
      throw err;
    });
};
