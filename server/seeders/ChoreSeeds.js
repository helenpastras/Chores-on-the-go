'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Chores', [{
      choreName: 'dishes',
      choreRoom: 'kitchen',
      assignee: 'Randy',
      completed: '0',
      dueDate: '20181010',
      // dateCompleted: 'NULL',
      description: 'Wash dishes and clean the drying rack and sink after',
      createdAt: '20181008',
      updatedAt: '20181008'
      }], 
    [{
      choreName: 'vacuum house',
      choreRoom: 'entire house',
      assignee: 'Anna',
      completed: '0',
      dueDate: '20181020',
      // dateCompleted: 'NULL',
      description: 'Vacuum the floors, entire apt',
      createdAt: '20181010',
      updatedAt: '20181010'
      }], 
    [{
      choreName: 'clean main bathroom',
      choreRoom: 'main bathroom',
      assignee: 'Nick',
      completed: '1',
      dueDate: '20181010',
      dateCompleted: '20181011',
      description: 'Wash bathroom sink, shower and toilet, clean floors and mirrors, take out garbage, add clean hand towels',
      createdAt: '20181005',
      updatedAt: '20181011'
      }],   
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chores', null, {});
  }
};

