
var db = require("../models");
var path = require("path");

module.exports = function(app) {



  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
  });

  app.get("/menu", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/menu.html"));
  });

  // Load index page
  // app.get("/orders", function(req, res) {
  //   db.Order.findAll({}).then(function(dbOrder) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       user: dbOrder
  //     });
  //   });
  // });
  
  // app.get("/orders", function(req, res) {
  //   db.User.findAll({}).then(function(dbUser) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       user: dbUser
  //     });
  //   });
  // });


}