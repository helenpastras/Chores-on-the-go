'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Roommate', 
    {    
    username: Sequelize.STRING,
    houseName: Sequelize.STRING
    })  
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roommate');
  }

};