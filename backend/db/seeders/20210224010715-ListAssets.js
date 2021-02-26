'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('ListAssets', [
        {coinCode:'BTC',coinName:"Bitcoin",coinLogo:'https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png',coinCurrentPrice:47758.93},
        {coinCode:'ETH',coinName:"Ethereum",coinLogo:'https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png',coinCurrentPrice:1540.53},
        {coinCode:'XRP',coinName:"XRP",coinLogo:'https://dynamic-assets.coinbase.com/e81509d2307f706f3a6f8999968874b50b628634abf5154fc91a7e5f7685d496a33acb4cde02265ed6f54b0a08fa54912208516e956bc5f0ffd1c9c2634099ae/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png',coinCurrentPrice:0.45},
        {coinCode:'BCH',coinName:"Bitcoin Cash",coinLogo:'https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png',coinCurrentPrice:500.50},
        {coinCode:'LTC',coinName:"Litecoin",coinLogo:'https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png',coinCurrentPrice:178.20},
        {coinCode:'XLM',coinName:"Stellar Lumens",coinLogo:'https://dynamic-assets.coinbase.com/ddaf9d27a2388105c5568c68ebe4078d057efac1cb9b091af6a57f4d187cf06b2701b95f75bd148d3872df32b69ebb678de71a42da317370aaec7d6448bda379/asset_icons/80782fe2d690f299e7f5bb9b89af87e1db75769e59c14fa0257054c962401805.png',coinCurrentPrice:0.40},
        {coinCode:'CGLD',coinName:"Celo",coinLogo:'https://dynamic-assets.coinbase.com/14d08a69247abed157b7855ced693ecece998f6aec67e03d91a2aaffef5ae667f31f8ecb086f76a731316019ed4099e40ddfbe05ad149f6cfe533d086385e0b3/asset_icons/bfb27bfb8e34f2a8d5fea4f191984b53b66d36d2196276409950434dcb434e8f.png',coinCurrentPrice:4.15},
        {coinCode:'COMP',coinName:"Compound",coinLogo:'https://dynamic-assets.coinbase.com/b0d22ef41d2fa2ecbb6c116ab9aa5f0ec6541cc63cffd922dd1f1564eda40e20e69cdafd8044c0d512e906b99dcdf0eade4251fe0ca3edd4dfa1ba2e6145cdf4/asset_icons/fed5c36d72b459ebe60c190c315bde2266ae24ff445f5cf599f124ac4fa21713.png',coinCurrentPrice:411.80},
        {coinCode:'MKR',coinName:"Maker",coinLogo:'https://dynamic-assets.coinbase.com/72be4627a61ff07a564bc85f46f20e926b0a578ee791e91ef73eb477b5bcd176edadb63b3474f82b98e1cc83ba23b1d170a539356ed8e809937f76a13580bfad/asset_icons/debfcbc694825f71051ce956aeae3a4bb197437756d4fc5cd1a207b8ea135ab6.png',coinCurrentPrice:2098.05},
        {coinCode:'GRT',coinName:"The Graph",coinLogo:'https://dynamic-assets.coinbase.com/21bf6d89d7fbaa29ff2a1f4a7f4e88cd6060d1e2231b1d2f54d8a954d81bdc4259adef278a51d5731eda1199025bdff0452488b4f93446988f37ef2a36a45e40/asset_icons/1113ffc0f5bcdf3700150f4a8c6df0c9f079e2f4a0cf4d2d921d79493af8105c.png',coinCurrentPrice:1.8044},
        {coinCode:'USDC',coinName:"USD Coin",coinLogo:'https://dynamic-assets.coinbase.com/3c15df5e2ac7d4abbe9499ed9335041f00c620f28e8de2f93474a9f432058742cdf4674bd43f309e69778a26969372310135be97eb183d91c492154176d455b8/asset_icons/9d67b728b6c8f457717154b3a35f9ddc702eae7e76c4684ee39302c4d7fd0bb8.png',coinCurrentPrice:1.00},
        {coinCode:'ALGO',coinName:"Algorand",coinLogo:'https://dynamic-assets.coinbase.com/434cf9473be68c296f9c213b64a8caaebeb0f0fcf4096f38af3175eead7107425676652c9219c003f2acaafdcb07bce1f4862fe4f3f692ca1ae1da3c3dbff546/asset_icons/40447ba4170da28e92cf5c02d5675103d44d75fd6076ad8b0f5a953b3d4d3b9e.png',coinCurrentPrice:1.02},
        {coinCode:'DOGE',coinName:"Dogecoin",coinLogo:'https://dynamic-assets.coinbase.com/3803f30367bb3972e192cd3fdd2230cd37e6d468eab12575a859229b20f12ff9c994d2c86ccd7bf9bc258e9bd5e46c5254283182f70caf4bd02cc4f8e3890d82/asset_icons/1597d628dd19b7885433a2ac2d7de6ad196c519aeab4bfe679706aacbf1df78a.png',coinCurrentPrice:0.0522},
       
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