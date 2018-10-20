'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chores = sequelize.define('Chores', {
    choreName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    choreRoom: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    description: DataTypes.TEXT,
    completed: {
      type:sequelize.BOOLEAN,
      is: true
    },
    assignee: DataTypes.STRING,
    dateCompleted: DataTypes.DATE,
  }, {});
  Chores.associate = function(models) {
    // associations can be defined here
  };
  return Chores;
};