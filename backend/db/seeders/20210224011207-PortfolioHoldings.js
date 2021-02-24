'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('PortfolioHoldings', [
        {user_id:4,listAssets_id:2,coinCount:50},
        {user_id:4,listAssets_id:3,coinCount:10},
        {user_id:4,listAssets_id:5,coinCount:3},
        {user_id:4,listAssets_id:6,coinCount:18}
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