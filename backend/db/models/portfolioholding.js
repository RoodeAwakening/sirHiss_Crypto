'use strict';

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const PortfolioHolding = sequelize.define('PortfolioHolding', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Users" }
    },
    listAssets_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "ListAssets" }
    },
    coinCount: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  PortfolioHolding.associate = function(models) {

    //portfolioHolding has many list assets
    PortfolioHolding.hasMany(models.ListAsset,{foreignKey:'listAssets_id'})
    //portfolioHoldings belongs to a user
    PortfolioHolding.belongsTo(models.User,{foreignKey:'user_id'})
    //portfolioHolding has many transactions
    PortfolioHolding.hasMany(models.Transaction,{foreignKey:'PortfolioHoldings_id'})

  };
  return PortfolioHolding;
};