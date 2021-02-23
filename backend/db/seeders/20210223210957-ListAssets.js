'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('ListAssets', [
        {coinCode:'USDC',coinName:"US Dollar Coin",coinLogo:'www.coinlogotest.com',coinCurrentPrice:1.00}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('ListAssets', null, {});
  }
};