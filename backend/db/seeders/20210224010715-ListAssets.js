'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('ListAssets', [
        {coinCode:'BTC',coinName:"Bitcoin",coinLogo:'www.coinlogotest.com',coinCurrentPrice:47758.93},
        {coinCode:'ETH',coinName:"Ethereum",coinLogo:'www.coinlogotest.com',coinCurrentPrice:1540.53},
        {coinCode:'XRP',coinName:"XRP",coinLogo:'www.coinlogotest.com',coinCurrentPrice:0.45},
        {coinCode:'BCH',coinName:"Bitcoin Cash",coinLogo:'www.coinlogotest.com',coinCurrentPrice:500.50},
        {coinCode:'LTC',coinName:"Litecoin",coinLogo:'www.coinlogotest.com',coinCurrentPrice:178.20},
        {coinCode:'XLM',coinName:"Stellar Lumens",coinLogo:'www.coinlogotest.com',coinCurrentPrice:0.40},
        {coinCode:'CGLD',coinName:"Celo",coinLogo:'www.coinlogotest.com',coinCurrentPrice:4.15},
        {coinCode:'COMP',coinName:"Compound",coinLogo:'www.coinlogotest.com',coinCurrentPrice:411.80},
        {coinCode:'MKR',coinName:"Maker",coinLogo:'www.coinlogotest.com',coinCurrentPrice:2098.05},
        {coinCode:'GRT',coinName:"The Graph",coinLogo:'www.coinlogotest.com',coinCurrentPrice:1.8044},
        {coinCode:'USDC',coinName:"USD Coin",coinLogo:'www.coinlogotest.com',coinCurrentPrice:1.00},
        {coinCode:'ALGO',coinName:"Algorand",coinLogo:'www.coinlogotest.com',coinCurrentPrice:1.02},
        {coinCode:'DOGE',coinName:"Dogecoin",coinLogo:'www.coinlogotest.com',coinCurrentPrice:0.0522},
       
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