'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Transactions', [
        {
          CustomerId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CustomerId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CustomerId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CustomerId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CustomerId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Transactions', null, {});
  }
};
