const router = require('express').Router();
const sourceController = require('../../controllers/sourceController');

router.route('/api/sources')
  .get(sourceController.addSources);

  router.route('/api/srating')
  .post(sourceController.setRating);

  
  router.route('/api/toptenrating')
  .get(sourceController.topTenRating);

  
  router.route('/api/sourcesdb')
  .get(sourceController.findAll);

module.exports = router;