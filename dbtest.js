const db = require("./models");

db.sequelize.sync({ force: false }).then(async function () {
    // const order = await db.Order.create({
    //     // UserId: user.id
    // })

    // await db.Item.create({
    //     OrderId: order.id
    // });

    // db.Item.create({
    //     OrderId: order.id
    // });

    // db.Item.create({
    //     OrderId: order.id
    // });

    // db.Item.create({
    //     OrderId: order.id
    // });

    db.Order.destroy({
        where: {
            id: 1
        }
    })

});
