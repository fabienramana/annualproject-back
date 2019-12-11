const decodeToken = require('../../../services/decodeToken')
const findOneById = require('../services/findOneById')

module.exports = (res,req, next) => {
    const clientWhoRequested = decodeToken(req);
    console.log(req)
    if(typeof clientWhoRequested._id !== 'undefined'){
        findOneById(clientWhoRequested._id)
            .then((client) => {
                res.json(client);
            })
            .catch((err) => {
                next(err)
            })
       
    }
    else{
        res.status(403)
        res.json({
            status : 'Unauthorized',
        })
    }
}