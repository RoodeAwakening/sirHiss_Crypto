'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListAsset = sequelize.define('ListAsset', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    watchLists_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Watchlists" },
    },
    coinCode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    coinName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    coinLogo: {
      type: DataTypes.STRING
    },
    coinCurrentPrice: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  ListAsset.associate = function(models) {
    //list asset belongs to a watchlists
    ListAsset.belongsTo(models.WatchList,{foreignKey:watchLists_id})
    //list asset belongs to many transactions
    ListAsset.belongsTo(models.Transaction,{foreignKey:listAssets_id})
    //list asset belongs to a portfolioAssets
    ListAsset.belongsTo(models.PortfolioAsset,{foreignKey:listAssets_id})
  };
  return ListAsset;
};