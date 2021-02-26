'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('PortfolioHoldings', [
        {user_id:1,listAssets_id:1,coinCount:1},
        {user_id:1,listAssets_id:2,coinCount:3},
        {user_id:1,listAssets_id:13,coinCount:50000},
        {user_id:1,listAssets_id:10,coinCount:10},
        {user_id:1,listAssets_id:8,coinCount:3},
        {user_id:1,listAssets_id:6,coinCount:18}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('PortfolioHoldings', null, {});
  }
};