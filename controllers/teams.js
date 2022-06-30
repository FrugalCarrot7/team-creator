var Team = require('../models/team');
const Driver = require('../models/driver');

module.exports = {
    index,
    new: newTeam,
    create,
    show,
    delete: deleteTeam,
    edit,
    update,
};

function index(req, res){ 
    console.log(req.user)
    Team.find({}, function(err, teams) {
      res.render('teams/index', { title: 'All Teams', teams });
      console.log(teams.length)
    });

}

function newTeam(req, res){
  res.render('teams/new', { title: 'ADD TEAM' });
}

function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  console.log('this is req.body create', req.body)
  var team = new Team(req.body);
  team.save(function(err) {
    // one way to handle errors
    if (err) return res.redirect('/teams/new');
    console.log(team);
    // for now, redirect right back to new.ejs
    console.log(team._id)
    res.redirect(`/teams/${team._id}`);
  });
}

function show(req, res) {
  Team.findById(req.params.id)
  .populate('members').exec(function(err, team) {
      Driver.find(
        {_id: {$nin: team.members}, user: req.user._id},
        function(err, drivers) {
          res.render('teams/show', {team, drivers});
        }
      )
  });
}

function deleteTeam(req, res) {
  Team.findByIdAndRemove(req.params.id, function(err) {
    res.redirect('/teams');
  })
}

function edit(req, res) {
  Team.findById(req.params.id, function(err, team) {
      res.render('teams/edit', {team})
  })
}

function update(req, res) {
  Team.findByIdAndUpdate(req.params.id, req.body, function(err) {
      res.redirect(`/teams/${req.params.id}`)
  })
}