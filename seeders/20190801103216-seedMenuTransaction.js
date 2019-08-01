'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('MenuTransactions', [
        {
          MenuId: 2,
          TransactionId: 2,
          quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          MenuId: 3,
          TransactionId: 2,
          quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          MenuId: 4,
          TransactionId: 3,
          quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          MenuId: 5,
          TransactionId: 4,
          quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          MenuId: 2,
          TransactionId: 3,
          quantity: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('MenuTransactions', null, {});
  }
};
