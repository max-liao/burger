// Dependencies
// =============================================================
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectall: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectOne: function(name, cb) {
    orm.selectOne("burgers", name, function(res) {
      cb(res);
      return res;
    });
  },
  updateOne: function(name, devoured, cb) {
    orm.updateOne("burgers", name, devoured, function(res) {
      cb(res);
      return res;
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

// Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// var orm = require("../config/orm.js");

// // Console log all the burgers.
// orm.selectAll();

// // Console log all the client_name's.
// orm.selectOne("Bacon");

// // Console log all the parties that have a party-type of grown-up.
// orm.updateOne("Bacon");

// // Creates a "Burger" model that matches up with DB
// var Burger = sequelize.define("burger", {
//   // the routeName gets saved as a string
//   burger_name: Sequelize.STRING,
//   // the name of the character (a string)
//   devoured: Sequelize.BOOLEAN
// }, {
//   timestamps: false
// });

// // Syncs with DB
// Burger.sync();

// // Makes the Character Model available for other files (will also create a table)
// module.exports = Burger;


