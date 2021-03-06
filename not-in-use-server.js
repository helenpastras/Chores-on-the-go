require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars");
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3001;

// Middleware
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
app.use(express.static("public"));

// // Handlebars
// app.engine( "handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Routes
app.use(require("./routes/authRoutes"));
app.use(require("./routes/htmlRoutes"));
// require("./routes/apiRoutes")(app);
app.use(function(req, res, next) {
  res.render("404");
});

// set strategies and serializations
passport.use(new LocalStrategy(db.Roommate.authenticate));
passport.serializeUser(db.Roommate.serializeUser);
passport.deserializeUser(db.Roommate.deserializeUser);


var syncOptions = { force: false };

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

module.exports = app;
