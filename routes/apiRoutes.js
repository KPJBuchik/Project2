var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/orders", function(req,res){
    db.Order.findAll({}).then(function(dbOrders){
      res.json(dbOrders)
    });
  });

  app.get("/api/items", function(req,res){
    db.Item.findAll({}).then(function(dbItems){
      res.json(dbItems)
    });
  });


}