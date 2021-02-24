'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('ListAssets', [
        {coinCode:'BTC',coinName:"Bitcoin",coinLogo:'www.coinlogotest.com',coinCurrentPrice:49564.85},
        {coinCode:'ETH',coinName:"Ethereum",coinLogo:'www.coinlogotest.com',coinCurrentPrice:1656.68},
        {coinCode:'XRP',coinName:"XRP",coinLogo:'www.coinlogotest.com',coinCurrentPrice:0.47},
        {coinCode:'BCH',coinName:"Bitcoin Cash",coinLogo:'www.coinlogotest.com',coinCurrentPrice:534.38},
        {coinCode:'LTC',coinName:"Litecoin",coinLogo:'www.coinlogotest.com',coinCurrentPrice:182.66},
        {coinCode:'XLM',coinName:"Stellar Lumens",coinLogo:'www.coinlogotest.com',coinCurrentPrice:0.41},
        {coinCode:'CGLD',coinName:"Celo",coinLogo:'www.coinlogotest.com',coinCurrentPrice:4.58},
       
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