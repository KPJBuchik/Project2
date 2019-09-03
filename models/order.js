module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        total_price: DataTypes.INTEGER,
        name: DataTypes.STRING,
        fulfilled:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        },

    });
    Order.associate = function (models) {
        Order.hasMany(models.Item);
        
    
        Order.belongsTo(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };
    return Order
}



