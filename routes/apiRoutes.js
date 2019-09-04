var db = require("../models");
var passport = require("../config/passport");


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


  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
    console.log(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        role: req.user.role
      });
    }
  });
};




