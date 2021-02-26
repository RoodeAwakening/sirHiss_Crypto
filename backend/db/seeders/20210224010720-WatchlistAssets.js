'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('WatchlistAssets', [
        {watchlist_id:1,listAssets_id:11},
        {watchlist_id:1,listAssets_id:8},
        {watchlist_id:1,listAssets_id:9},
        {watchlist_id:1,listAssets_id:10},
        {watchlist_id:1,listAssets_id:6},
        {watchlist_id:1,listAssets_id:7},
        {watchlist_id:1,listAssets_id:2},
        {watchlist_id:1,listAssets_id:1},
        
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