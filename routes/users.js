console.log("in users.js file");
var db = require("../models");
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// var User = require('../models/user.js');

router.get('/register', function (req, res) {
    res.render('register');
});

router.get('/login', function (req, res) {
    res.render('login');
});
router.get('/members', function (req, res){
    res.render('members');
})

router.get('/membersAddServ', function (req, res){
    res.render('membersAddServ');
})

//add router.post for log in
//Incoming form data
console.log("Here line 20");
//create variables for each parameter received from form
router.post('/register', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    console.log(req.body);
    //validate inputs usimg express-validate
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'User name is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
    console.log("Here line 34");

    var errors = req.validationErrors();

    if (errors) {
        console.log(errors);
        // if errors in form, return user to registration page to resubmit 
        res.render('register', {
            //display errors above form...errors displayed via register.handlebars
            errors: errors
        });
    }
    else {

        var somePassword = req.body.password;

        var createPassword = function (string) {
            console.log('starting bcrypt to create password');
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(somePassword, salt, (err, hash) => {
                    if (err) throw err;
                    somePassword = hash;
                    console.log(somePassword);
                    //add user to User table in DB
                    db.User.create({
                        name: req.body.name,
                        username: req.body.name,
                        email: req.body.email,
                        password: somePassword
                    }).then(function (dbUser) {
                        //  Msg to post on login page:
                        req.flash('success_msg', 'You are registered and can now login');
            
                        res.redirect('/users/login');
            
                })
            });

        });
    }
        createPassword(somePassword);
        

        // // create user in DB  --- this code writes user data to DB table
         



    }
});
//Here
// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      username: "username"
    },
    function(username, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          username: username
        }
      }).then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        // If there is a user with the given email, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  ));
  
  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });


    
//         });
        router.post('/login',
        passport.authenticate('local', { successRedirect: '/users/members', failureRedirect: '/users/login', failureFlash: true }),
        function (req, res) {
            res.redirect('/users/members');
        });
    
        router.get('/logout', function (req, res) {
            req.logout();
        
            req.flash('success_msg', 'You are logged out');
        
            res.redirect('/users/login');
        });
module.exports = router;
