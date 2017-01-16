var express = require("express");

var router = express.Router();

// Import the model burger.js to use its database function.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
