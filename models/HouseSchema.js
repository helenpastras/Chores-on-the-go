'use strict';
module.exports = (sequelize, DataTypes) => {
  const Houses = sequelize.define('Houses', {
    houseName: DataTypes.STRING,
    houseAdmin: DataTypes.STRING
  }, {});
  Houses.associate = function(models) {
    // associations can be defined here
    models.Roommates.belongsTo(Houses)
  };
  return Houses;
};