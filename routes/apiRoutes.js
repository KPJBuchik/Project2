var db = require("../models");


module.exports = function (app) {


  //get order table on manager view page
  app.get("/orders", function (req, res) {
    db.Order.findAll()
      .then(function (dbOrder) {
        console.log("hey" + dbOrder);
        var hbsObject = { order: dbOrder };
        return res.render("index", hbsObject);
      });
  })
  //get user table on manager view page
  app.get("/orders", function (req, res) {
    db.User.findAll()
      .then(function (dbUser) {
        console.log("hey" + dbUser);

        var hbsObject = { user: dbUser };
        return res.render("index", hbsObject);
      });
  })
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

  // app.get("/api/orders/:id"), function (req, res) {
  //   console.log("test")
  //   db.Order.findOne({
  //     where: {
  //       id: req.params.id
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


  app.post("/api/items", function (req, res) {
    console.log(req.body);
    db.Order.create({
      UserId: 1,
      name: req.body.order_name
    }).then(function (dbOrder) {
      const items = JSON.parse(req.body.items).map(item => ({ quantity: item.quantity, item_name: item.name, item_price: item.price, OrderId: dbOrder.id }));
      db.Item.bulkCreate(items)
        .then(function (dbPost) {
          res.json(dbPost);
        });
    })
  });
}