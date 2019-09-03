
var db = require("../models");

module.exports = function(app) {

  // Load index page
  app.get("/orders", function(req, res) {
    db.Order.findAll({}).then(function(dbOrder) {
      res.render("index", {
        msg: "Welcome!",
        user: dbOrder
      });
    });
  });
  
  app.get("/orders", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("index", {
        msg: "Welcome!",
        user: dbUser
      });
    });
  });


}