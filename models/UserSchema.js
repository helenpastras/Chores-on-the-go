'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roommates = sequelize.define('Roommates', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlphanumeric: true, 
    },
    houseName: DataTypes.STRING, 
    active: {
      type:DataTypes.BOOLEAN,
      is: true
    },
    dateAdded:DataTypes.DATE
  }, 
  {});
  Roommates.associate = function(models) {

    models.Chores.belongsTo(Roommates),
    models.Houses.hasMany(Roommates)

    // associations can be defined here
  };
  return Roommates;
};