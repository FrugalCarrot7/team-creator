var Team = require('../models/team');
const Driver = require('../models/driver');

module.exports = {
    new: newDriver,
    create,
};

function newDriver(req, res) {
    res.render('drivers/new', {teamId: req.params.id})
}

function create(req, res) {
    const teamId = req.params.id
    req.body.team = teamId
    Driver.create(req.body, function(err, driver) {
      res.redirect(`/teams/${teamId}`)
    })
}