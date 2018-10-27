var db = require("../models");
var express = require('express');
var router = express.Router();
var passport = require('passport');
// var User = require('../models').User;



router.get('/', (req, res) => {
    res.render('index', { user : req.user });
});

router.get('/register', (req, res) => {
    res.render('register', { });
});

router.post('/register', (req, res, next) => {
    console.log('hi from post to register');
    console.log(req.body);
    debugger;
    db.Roommate.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        email: req.body.email
    }).then(function() {
        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                // res.redirect('/');
                res.json(req.user)
            }); 
        });
    }).catch(function(err) {
        console.log(err);
        // return res.render('register', { error : err.message });
        res.json({
            error: true,
            errors: ['username needs to be provided']
        })
    });
});

  
router.get('/login', (req, res) => {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ping', (req, res) => {
    res.status(200).send("pong!");
});

module.exports = router;
