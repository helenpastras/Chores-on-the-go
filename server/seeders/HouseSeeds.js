'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Houses', [{
        houseName: '4414Kinross',
        houseAdmin: 'Anna',
        createdAt: '20180908',
        updatedAt: '20181008'
      }, 
      {
        houseName: '14060Marquesas',
        houseAdmin: 'Nick',
        createdAt: '20180908',
        updatedAt: '20181009'
      }], 
      {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Houses', null, {});
  }
};
