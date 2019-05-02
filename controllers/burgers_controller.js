var express = require("express");

var router = express.Router();

var burger = require("../models/burger");


router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var id = "id = " + req.params.id;

    // console.log("req.body: ", req.body)
    // console.log("id: ", id);
    burger.updateOne({
        devoured: req.body.devoured
    }, id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post("/api/burgers", function(req, res) {

    console.log("req.body: ", req.body)

    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });













module.exports = router;
