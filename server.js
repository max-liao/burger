var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});



// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// // Root get route
// app.get("/", function(req, res) {
//   connection.query("SELECT * FROM burgers;", function(err, data) {
//     if (err) throw err;

//     // Test it
//     console.log('The solution is: ', data);

//     // Test it
//     // return res.send(data);
//     res.json(data);
//     // res.render("index", { tasks: data });
//   });
// });

// // Post route -> back to home
// app.post("/", function(req, res) {
//   // Test it
//   console.log('You sent, ' + req.body.burger);

//   // Test it
//   // return res.send('You sent, ' + req.body.task);

//   // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
//   // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
//   // https://en.wikipedia.org/wiki/SQL_injection
//   connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false)", [req.body.burger], function(err, result) {
//     if (err) throw err;
//     console.log("test");
//     console.log(result);
//     res.redirect("/");
//   });
// });

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
