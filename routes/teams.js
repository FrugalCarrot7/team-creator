var express = require('express');
var router = express.Router();
var teamsCtrl = require('../controllers/teams');

router.get('/', teamsCtrl.index);

module.exports = router;