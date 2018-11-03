// require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

//Models
const db = require("./models");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Sessions Middleware
app.use(require('express-session')({
  secret: 'keyboard cat', resave: true, saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve Static Files Middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Routes
app.use(require("./routes/authRoutes"));
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/usersRoutes"));
app.use(require("./routes/houseRoutes"));
app.use(require("./routes/choresRoutes"));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

 // set strategies and serializations
passport.use(new LocalStrategy(db.Roommate.authenticate));
passport.serializeUser(db.Roommate.serializeUser);
passport.deserializeUser(db.Roommate.deserializeUser);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const syncOptions = { force: false };
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
// Sync Database
module.exports = app;
