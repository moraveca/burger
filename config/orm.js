var connection = require("../config/connection");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, devouredState, idNumber, cb) {
        console.log("devouredState: ", devouredState);
        console.log("idNumber: ", idNumber);
        var queryString = "UPDATE " + table + " SET devoured = true WHERE "  

        // queryString += " SET ";
        // queryString += devoured(true);
        // queryString += " WHERE ";
        queryString += idNumber;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
console.log("vals: ", vals)

        var queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES ('";
        queryString += vals[0] + "', " + vals[1];
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },




}

module.exports = orm;
