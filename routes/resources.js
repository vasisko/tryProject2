console.log("in resource.js file");
var db = require("../models");
var express = require('express');
var router = express.Router();


router.get('/resources', function (req, res) {
    res.render('resources');
});

console.log("passed get");//MAKES IT HERE

router.get("/getresources", function(req, res) {
    db.Resource.findAll({}).then(function(dbResource) {
        console.log("In resources.hbrs");
        res.json(dbResource);
        // res.redirect();
    });
  });


module.exports = router;