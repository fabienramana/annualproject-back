const { Router } = require('express');
const loginAdmin = require('./middleware/loginAdmin');
const createAdmin = require('./middleware/createAdmin');
const createGenericAdmin = require('./middleware/createGenericAdmin');
const createComponentModel = require('./middleware/createComponentModel');
const getComponentModels = require('./middleware/getComponentModels');
const getComponentModelById = require('./middleware/getComponentModelById');
const modifyComponentModel = require('./middleware/modifyComponentModel');
const deleteComponentModel = require('./middleware/deleteComponentModel');
const createSite = require('./middleware/createSite');
const getAllSites = require('./middleware/getAllSites');
const getSiteById = require('./middleware/getSiteById');
const updateSite = require('./middleware/updateSite');
const getSitesByCompanyId = require('./middleware/getSitesByCompanyId');
const activateSite = require('./middleware/activateSite');
const deactivateSite = require('./middleware/deactivateSite');

const router = new Router();

// Service  API

router.route('/login_admin')
  .post(loginAdmin);

router.route('/create_admin')
  .post(createAdmin);

router.route('/create_generic_admin')
  .post(createGenericAdmin);

router.route('/create_component_model')
  .post(createComponentModel);

router.route('/component-models')
  .get(getComponentModels);

router.route('/component-model/:id')
  .get(getComponentModelById)
  .put(modifyComponentModel)
  .delete(deleteComponentModel);

router.route('/create-site')
  .post(createSite);

router.route('/sites')
  .get(getAllSites);

router.route('/site/:id')
  .get(getSiteById)
  .put(updateSite);

router.route('/company/:id/sites')
  .get(getSitesByCompanyId);

router.route('/activate-site/:id')
  .post(activateSite);

router.route('/deactivate-site/:id')
  .post(deactivateSite);

module.exports = router;
