const db = require("./models");

db.sequelize.sync({ force: false }).then(async function () {
    const order = await db.Order.create({
        total_price: 100,
        name: "Test",
        fulfilled: false
    });

    await db.Item.create({
        OrderId: order.id,
        item_name: "Test Item - 1",
        quantity: 100,
        item_price: 10
    });
    await db.Item.create({
        OrderId: order.id,
        item_name: "Test Item - 2",
        quantity: 100,
        item_price: 10
    });

});
