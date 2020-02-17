const express = require("express");
const bug = require("../models/burger.js");


var app = express();


app.get("/", function(req, res) {
    bug.all(function(data) {
      console.log(data);
      res.render("index", {burgers: data});
    });
  });

  app.put("/api/burger/:id", function(req, res){
     bug.update(req.params.id, req.body, function(){
      res.status(200).end();
     });
     
  });

  app.post("/api/burger", function(req, res) {
    bug.create(
      req.body, 
      
      
     function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });


module.exports = app;
