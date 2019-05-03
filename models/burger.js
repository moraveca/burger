var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
        console.log(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    updateOne: function(devouredState, idNumber, cb) {

      orm.updateOne("burgers", devouredState, idNumber, function(res) {
        cb(res);
      });
    },
  };


module.exports = burger;
