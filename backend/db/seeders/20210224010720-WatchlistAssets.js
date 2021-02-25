'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('WatchlistAssets', [
        {watchlist_id:6,listAssets_id:9},
        {watchlist_id:5,listAssets_id:10},
        {watchlist_id:5,listAssets_id:11},
        {watchlist_id:6,listAssets_id:12},
        {watchlist_id:5,listAssets_id:13},
        {watchlist_id:5,listAssets_id:14},
        {watchlist_id:6,listAssets_id:15},
        {watchlist_id:6,listAssets_id:10},
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