const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (name, description, price, siteId, imagePath) => {
  return connect()
    .then(db => db.collection(collections.ARTICLE))
    .then(collection => collection.insertOne({
      name,
      description,
      price,
      siteId,
      imagePath,
    }))
    .then((dbResponse) => {
      if (dbResponse) {
        return 'success';
      }

      const err = new Error('Article not created');
      err.name = 'Internal Error';
      err.status = 500;
      throw err;
    });
};
