const router = require('express').Router();
const artController = require('../../controllers/artController');

router.route('/api/article/:q/:source?')
  .get(artController.addArticles);

router.route('/articlesdb')
  .get(artController.findAll);


module.exports = router;