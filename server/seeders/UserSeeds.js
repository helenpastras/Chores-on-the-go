'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roommates', 
    [{
      username: 'Randy',
      firstName: 'Randy',
      lastName: 'Randalph',
      email: 'randy@me.com', 
      password: '1234qwer',
      houseName: '4414Kinross',
      dateAdded: '20180509', 
      createdAt: '20180509',
      updatedAt:'20171002'

    }],
    [{
      username: 'Anna',
      firstName: 'Anna',
      lastName: 'Banna',
      email: 'annab@banna.com', 
      password: 'qwer1234',
      houseName: '4414Kinross',
      dateAdded: '20180402',
      createdAt: '20180402',
      updatedAt:'20171002'
      }], 
    [{
      username: 'nikko',
      firstName: 'Nick',
      lastName: 'Mick',
      email: 'nick@mick.com', 
      password: '1234asdf',
      houseName: '14060Marquesas',
      dateAdded: '20171002',
      createdAt:'20171002',
      updatedAt:'20171002'
      }], 
      {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roommates', null, {});
  }
};

