var Team = require('../models/team');
const Driver = require('../models/driver');
const methodOverride = require('method-override');

module.exports = {
    new: newDriver,
    create,
    addToTeam,
};

function newDriver(req, res) {
    console.log('hit NEWDRIVER')
    res.render('drivers/new', {teamId: req.params.id})
}

function create(req, res) {
    Driver.create(req.body, function(err, driver) {
      res.redirect(`/teams`)
    })
}

function addToTeam(req, res) {
    Team.findById(req.params.id, function(err, team) {
        console.log('this is req.body add to team', req.body)
        team.members.push(req.body.driverId)
        team.save(function(err){
            res.redirect(`/teams/${team._id}`)
        })
    })
}