var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');

router.get('/', teamsCtrl.index);
router.get('/new', teamsCtrl.new);
router.post('/', teamsCtrl.create);

module.exports = router;