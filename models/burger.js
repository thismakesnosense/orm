const orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(objColVals, cb) {
      orm.create("burgers", objColVals, function(res) {
        cb(res);
      });
    },
    update: function(id, objColVals, cb) {
      orm.updateOne(id, objColVals, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller 
  module.exports = burger;

