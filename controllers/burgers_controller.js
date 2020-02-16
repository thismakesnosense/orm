const express = require("express");
const bug = require("../models/burger.js");


var app = express();


app.get("/", function(req, res) {
    bug.all(function(data) {
      console.log(data);
      res.render("index", data);
    });
  });


module.exports = app;
