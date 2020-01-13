const { Router } = require('express');

const createCompany = require('./middleware/createCompany');
const loginCompany = require('./middleware/loginCompany');
const createArticle = require('./middleware/createArticle');
const getArticlesBySiteId = require('./middleware/getArticlesBySiteId');
const getArticleById = require('./middleware/getArticleById');
const updateArticle = require('./middleware/updateArticle');
const deleteArticle = require('./middleware/deleteArticle');

const router = new Router();

// Service  API

router.route('/create_company')
  .post(createCompany);

router.route('/login_company')
  .post(loginCompany);

router.route('/create-article')
  .post(createArticle);

router.route('/site/:siteId/articles')
  .get(getArticlesBySiteId);

router.route('/article/:id')
  .get(getArticleById)
  .put(updateArticle)
  .delete(deleteArticle);

module.exports = router;
