'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Chores', 'assignee', {
        dataType: Sequelize.STRING,
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Chores');
  }
};