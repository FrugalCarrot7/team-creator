var Team = require('../models/team');
const Driver = require('../models/driver');
const methodOverride = require('method-override');

module.exports = {
    new: newDriver,
    create,
    addToTeam,
};

function newDriver(req, res) {
    res.render('drivers/new', {teamId: req.params.id})
}

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    Driver.create(req.body, function(err, driver) {
      res.redirect(`/teams`)
    })
}

function addToTeam(req, res) {
    Team.findById(req.params.id, function(err, team) {
        team.members.push(req.body.driverId)
        team.save(function(err){
            res.redirect(`/teams/${team._id}`)
        })
    })
}