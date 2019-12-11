const findOneByEmail = require('../services/findOneByEmail')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')




module.exports = function(req, res) { 

    console.log(req.body); 
    findOneByEmail(req.body.email)
        .then((client) => {
            bcrypt.compare(req.body.password, client.password,(err,res2) => {
                if(res2 == true){
                    jwt.sign({ client },'secretKey', { expiresIn : '1440m'}, (errJWT, token)=>{
                        res.json({
                            token,
                        })
                    })

                }else if(res2 == false){
                    res.json({
                        error: 'wrong password'
                    })

                }else if (err){
                    res.json({
                        error : 'Error authenticating'
                    })
                }
            })
        })
        .catch((errFinal) => {
            next(errFinal);
        })
}