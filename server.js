//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Define port the server will be listening on.
var PORT = process.env.PORT || 3000;

var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

//App is listening...
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
