'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Transactions', [
        {user_id:7,listAssets_id:9,portfolioHoldings_id:20,price:49564.85,coinCount:50,transactionType:'buy'},
        {user_id:8,listAssets_id:9,portfolioHoldings_id:21,price:49564.85,coinCount:50,transactionType:'buy'},
        {user_id:9,listAssets_id:10,portfolioHoldings_id:22,price:49564.85,coinCount:50,transactionType:'buy'},
        {user_id:7,listAssets_id:11,portfolioHoldings_id:23,price:1656.68,coinCount:10,transactionType:'buy'},
        {user_id:7,listAssets_id:12,portfolioHoldings_id:24,price:534.38,coinCount:3,transactionType:'buy'},
        {user_id:7,listAssets_id:13,portfolioHoldings_id:25,price:0.41,coinCount:18,transactionType:'buy'}
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
