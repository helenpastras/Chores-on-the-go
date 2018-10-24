'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define('House', {
    houseName: DataTypes.STRING,
    houseAdmin: DataTypes.STRING
  }, {});
  House.associate = function(models) {
    // associations can be defined here
    models.Roomate.belongsTo(House)
  };
  return House;
};