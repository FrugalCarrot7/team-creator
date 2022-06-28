const express = require('express');
const router = express.Router();
const driversCtrl = require('../controllers/drivers');

router.get('/teams/:id/drivers/new', driversCtrl.new);
router.post('/teams/:id/drivers',  driversCtrl.create);

module.exports = router;