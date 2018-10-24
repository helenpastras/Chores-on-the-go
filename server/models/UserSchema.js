'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roommate = sequelize.define('Roommate', {
    username: {
      type: sequelize.STRING,
      allowNull: false,
    },
    firstName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    lastName: DataTypes.STRING,
    email: {
      type: sequelize.STRING,
      allowNull: false,
      isEmail: true
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
      isAlphanumeric: true, 
    },
    houseName: DataTypes.STRING, 
    active: {
      type:sequelize.BOOLEAN,
      is: true
    },
    dateAdded:DataTypes.DATE
  }, 
  {});
  Roommate.associate = function(models) {

    models.Chores.belongsTo(Roomate)

    
    // associations can be defined here
  };
  return Roommate;
};