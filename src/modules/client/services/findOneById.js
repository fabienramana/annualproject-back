const { ObjectId } = require('mongodb')
const connect = require('../../../client/mongodb')
const collections = require('../../../enums/collections')
const deleteClientPrivateKeys = require('../../../helpers/deleteClientPrivateKeys')

module.exports = (id) =>{
    return connect()
    .then(db => db.collection(collections.CLIENT))
    .then(collection => collection.findone({ _id: ObjectId(id)}))
    .then((dbResponse) => {
        if(dbResponse){
            return deleteClientPrivateKeys(dbResponse);
        }
        const err = new Error(`Client not found for id : ${id}`)
        err.name = 'not Found'
        err.status = 404
        throw err
    })
}