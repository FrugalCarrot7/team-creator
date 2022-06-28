var Team = require('../models/team');

module.exports = {
    index,
    new: newTeam,
    create,
};

function index(req, res){ 
    console.log(req.user)
    Team.find({}, function(err, teams) {
      res.render('teams/index', { title: 'All Teams', teams });
    });

}

function newTeam(req, res){
  res.render('teams/new', { title: 'ADD TEAM' });
}

function create(req, res) {
  var team = new Team(req.body);
  team.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/teams/new');
    console.log(team);
    // for now, redirect right back to new.ejs
    res.redirect(`/teams`);
  });
}