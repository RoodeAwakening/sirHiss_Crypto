'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('WatchlistAssets', [
        {watchlist_id:3,listAssets_id:2},
        {watchlist_id:3,listAssets_id:3},
        {watchlist_id:3,listAssets_id:6},
        {watchlist_id:3,listAssets_id:4},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('WatchlistAssets', null, {});
  }
};