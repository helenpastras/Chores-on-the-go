const express = require('express');
const router = express.Router();
const path = require('path');



// API Routes
router.use(require("../routes/choresRoutes"));
router.use(require("../routes/houseRoutes"));
router.use(require("../routes/usersRoutes"));

// Auth and HTML Routes
router.use(require("../routes/authRoutes"));
router.use(require("../routes/htmlRoutes"));
router.use(function(req, res, next) {
  res.render("404");
});


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
