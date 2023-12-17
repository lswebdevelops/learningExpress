// wiki.js - Wiki route module

const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Wiki home page");
  // http://localhost:3000/wiki
});

// About page route
router.get("/about", function (req, res) {
  res.send("About this wiki");
//  http://localhost:3000/wiki/about
});

module.exports = router;
