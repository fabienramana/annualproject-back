const jwt = require('jsonwebtoken');
const createOne = require('../services/createOne')




module.exports = (req,res,next) => {
    const  {firstname} =  req.body;
    const  { lastname }  =  req.body;
    const  { email }  =  req.body;
    const  { password }  =  req.body;
    
    
    
    createOne(firstname,lastname,email,password)
        .then((client) => {
            jwt.sign({client}, 'secretKey', {expiresIn:'1440m'},(errJWT, token) => {
                res.json({
                    _id: client._id,
                    firstname: client.firstname,
                    lastname: client.lastname,
                    email:  client.email,
                    password: client.password,
                    token,
                });
            });
        })
        .catch((err) => {
            next(err);
        });
}