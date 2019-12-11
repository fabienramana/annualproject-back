const connect =  require('../../../client/mongodb');
const collections = require('../../../enums/collections');

module.exports = (email)=> {
    return connect()
        .then(db=>db.collection(collections.CLIENT))
        .then(collection => collection.findOne({ email }))
        .then((dbResponse)=> {
            if(dbResponse){
                const err = new Error('Email already exists');
                err.status = 500;
                err.name = 'Internal error';
                throw err;
                
            }
            return({
                ok : 'ok',
            })
        })
}