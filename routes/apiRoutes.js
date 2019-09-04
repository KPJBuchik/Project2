var db = require("../models");


module.exports = function (app) {



 //change order from not fulfilled to fulfilled
  app.put("/api/orders/:id", function (req, res) {
    // update one of the orders
    db.Order.update({
      fulfilled: true
    },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function (order) {
      console.log(order)
      res.json(order);
    });
  });

//deletes order 
  app.delete("/api/orders/:id", (req, res) => {
    const id = req.params.id;
    db.Order.destroy({
      where: {
        id: id
      }
    }).then((deletedOrder) => {
      res.json(deletedOrder);
    });

  });




  // Get all tables
  app.get("/api/orders", function (req, res) {
    db.Order.findAll({}).then(function (dbOrders) {
      res.json(dbOrders)
    });
  });

  // app.get("/api/items/:orderId"), function (req, res) {
  //   console.log("test")
  //   db.Order.findOne({
  //     where: {
  //       orderId: req.params.orderId
  //     }
  //   }).then(function (dbOrderId) {
  //     console.log(dbOrderId)
  //     res.json(dbOrderId)
  //   })
  // }

  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/items", function (req, res) {
    db.Item.findAll({}).then(function (dbItems) {
      res.json(dbItems)
    });
  });






}