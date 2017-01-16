var express = require("express");

var router = express.Router();

// Import the model burger.js to use its database function.
var burger = require("../models/cat.js");

// Create all our routes and set up logic within those routes required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});
