const { Router} = require('express');
const createOne = require('./middleware/createOne')
const assignToken = require('../../services/assignToken')
const verifyToken = require('../../services/verifyToken')
const login = require('./middleware/login')
const showMyInformations =  require('./middleware/showMyInformations')

const router = new Router();

router.route('/register')
  .post(createOne)

  
router.route('/login')
    .post(login)

router.route('/show-my-info')
  .get(showMyInformations)
  
  


router.use(assignToken);
router.use(verifyToken);   



module.exports = router;
