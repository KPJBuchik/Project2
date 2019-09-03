module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        total_price: DataTypes.INTEGER,
        name: DataTypes.STRING,
        fulfilled:DataTypes.BOOLEAN
    });
    // Order.associate = function (models) {
    //     Order.hasMany(models.Item);
        
    
    //     Order.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    // //     });
    // };
    return Order
}



