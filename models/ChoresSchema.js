'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chores = sequelize.define('Chores', {
    choreName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    choreRoom: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    description: DataTypes.TEXT,
    completed: {
      type:DataTypes.BOOLEAN,
      default: false
    },
    assignee: DataTypes.STRING,
    dateCompleted: {
    type: DataTypes.DATE,
    default: null
  
  }
  }, {});
  Chores.associate = function(models) {
    // associations can be defined here
    
  };
  return Chores;
};