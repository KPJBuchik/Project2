var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
  });

  app.get("/menu", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/menu.html"));
  });

  //get order table on manager view page
  app.get("/orders", isAuthenticated, function(req, res) {
    db.Order.findAll({
      include: [db.Item]
    }).then(function(dbOrder) {
      var hbsObject = { order: dbOrder };
      console.log(hbsObject);
      return res.render("index", hbsObject);
    });
  });
  //get order table on manager view page
  app.get("/api/burrito", function(req, res) {
    db.Order.findAll({
      include: [db.Item]
    }).then(function(dbOrder) {
      var hbsObject = { order: dbOrder };

      return res.json({ order: dbOrder });
    });
  });
  //get user table on manager view page
  // app.get("/orders", function (req, res) {
  //   db.User.findAll()
  //     .then(function (dbUser) {
  //       console.log("hey2" + dbUser);

  //       var hbsObject2 = { user: dbUser };
  //       return res.render("index", hbsObject2);
  //     });
  // })

  //get item table on manager view page

  // app.get("/orders", function (req, res) {
  //   db.Item.findAll()
  //     .then(function (dbItem) {
  //       console.log("hey3" + dbItem);

  //       var hbsObject3 = { item: dbItem};
  //       return res.render("index", hbsObject3);
  //     });
  // })

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
};