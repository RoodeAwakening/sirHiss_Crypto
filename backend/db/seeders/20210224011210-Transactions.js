'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Transactions', [
        {user_id:1,listAssets_id:1,portfolioHoldings_id:1,price:49564.85,coinCount:50,transactionType:'buy'},
        {user_id:1,listAssets_id:2,portfolioHoldings_id:2,price:49564.85,coinCount:50,transactionType:'buy'},
        {user_id:1,listAssets_id:13,portfolioHoldings_id:3,price:49564.85,coinCount:50,transactionType:'buy'},
        {user_id:1,listAssets_id:10,portfolioHoldings_id:4,price:1656.68,coinCount:10,transactionType:'buy'},
        {user_id:1,listAssets_id:8,portfolioHoldings_id:5,price:534.38,coinCount:3,transactionType:'buy'},
        {user_id:1,listAssets_id:6,portfolioHoldings_id:6,price:0.41,coinCount:18,transactionType:'buy'}
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
