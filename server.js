var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport')


// It's very important to require dotenv before any other module
// that depends upon the properties added to process.env 
require('dotenv').config();
// config/database depends upon process.env.DATABASE_URL
// connect to the database with Mongoose
require('./config/database');

require('./config/passport');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var teamsRouter = require('./routes/teams');
var driversRouter = require('./routes/drivers');

// console.log('this is drivers router', driversRouter, 'end of drivers router')
// console.log('this is teams router', teamsRouter, 'end of teams router')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARE PIPELINE
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

//Adds a secret to .env
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

//INVOKE SESSION AND INTIALIZE
app.use(passport.initialize());
app.use(passport.session());

//LOGGED IN USER IS NOW IN USER VARIABLE
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

//ROUTES
app.use('/', indexRouter);
app.use('/teams', teamsRouter);
app.use('/users', usersRouter);
app.use('/', driversRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
