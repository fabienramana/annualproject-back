const bcrypt= require('bcryptjs');
const { createModel } = require('../model');
const connect =  require('../../../client/mongodb');
const collections = require('../../../enums/collections');
const findIfEmailExists = require('./findIfEmailExists')

module.exports = (firstname, lastname, email, password) => {
    
    if(password == null){
        const err = new Error('Password is not set');
        err.name = 'Internal Error';
        err.status = 500;
        throw err;
    }
    
    const encryptedPassword = bcrypt.hashSync(password, 8);
    
    return findIfEmailExists(email)
        .then(createModel.validate({
            firstname,
            lastname,
            email,
            password: encryptedPassword,
            
        }))
        .then(connect)
        .then(db => db.collection(collections.CLIENT))
        .then(collection => collection.insertOne({
            firstname,
            lastname,
            email,
            password : encryptedPassword,
        }))
        .then(dbResponse => dbResponse.ops[0]);
}