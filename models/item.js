module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define("Item", {
        item_name: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        item_price:DataTypes.INTEGER
        
    });
    // Items.associate = function (models) {
    //     Items.belongsTo(models.Order, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Items
}
