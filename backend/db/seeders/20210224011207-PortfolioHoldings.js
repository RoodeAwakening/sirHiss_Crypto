'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('PortfolioHoldings', [
        {user_id:7,listAssets_id:9,coinCount:50},
        {user_id:8,listAssets_id:9,coinCount:50},
        {user_id:9,listAssets_id:9,coinCount:50},
        {user_id:7,listAssets_id:10,coinCount:10},
        {user_id:7,listAssets_id:11,coinCount:3},
        {user_id:7,listAssets_id:12,coinCount:18}
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