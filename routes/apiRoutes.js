var db = require("../models");

module.exports = function(app) {
app.get("/", function(req,res) {
db.Order.findAll({}).then(function(data){
var order={
  order:data
}
console.log(order);
res.render(order);


})


})











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