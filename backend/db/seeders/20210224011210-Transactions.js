'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Transactions', [
        {user_id:4,listAssets_id:2,portfolioHoldings_id:10,price:49564.85,coinCount:50,transactionType:'buy'},
        {user_id:4,listAssets_id:3,portfolioHoldings_id:11,price:1656.68,coinCount:10,transactionType:'buy'},
        {user_id:4,listAssets_id:5,portfolioHoldings_id:12,price:534.38,coinCount:3,transactionType:'buy'},
        {user_id:4,listAssets_id:7,portfolioHoldings_id:13,price:0.41,coinCount:18,transactionType:'buy'}
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
