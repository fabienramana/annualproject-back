const connect =  require('../../../client/mongodb')
const collections = require('../../../enums/collections')

module.exports = (email) => {
    return connect()
        .then(db => db.collection(collections.CLIENT))
        .then(collection => collection.findOne({ email }))
        .then((dbResponse) => {
            if (dbResponse) {
                return dbResponse;
            }
            return({
                ok : 'ok',
            })
        })

}