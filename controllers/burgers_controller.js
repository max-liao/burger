// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku

// Routes
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  //  = burger.selectall();
  burger.selectall(function(data) {
    // console.log("Hbs Object test:");
    res.render("index", {burgers:data});
  });
});

router.post("/api/burger", function(req, res) {
  burger.selectOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    // res.json({ id: result.insertId });
    res.json({ id: result.id });
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;