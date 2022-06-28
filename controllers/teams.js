var Team = require('../models/team');

module.exports = {
    index,
};

function index(req, res){ 
    console.log(req.user)
    Team.find({}, function(err, teams) {
      res.render('teams/index', { title: 'All Teams', teams });
    });

}