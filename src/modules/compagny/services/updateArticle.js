const { ObjectId } = require('mongodb');
const connect = require('../../../client/mongodb');
const collections = require('../../../enums/collections');
const findOne = require('./getArticleById');

module.exports = (id, updatedArticle) => {
  return connect()
    .then(db => db.collection(collections.ARTICLE))
    .then(collection => collection.updateOne({
      _id: ObjectId(id),
    }, { $set: updatedArticle }))
    .then((dbResponse) => {
      if (dbResponse.matchedCount === 1) {
        return findOne(id);
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
