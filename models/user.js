module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    creditcard: DataTypes.INTEGER,
    Password: DataTypes.STRING,

  });


User.associate = function (models) {
  models.User.hasMany(models.Order, {
    onDelete: "cascade"
  });

};
return User;

};