'use strict';


module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
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
    portfolioHoldings_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "PortfolioHoldings" }
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    coinCount: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    transactionType: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Transaction.associate = function(models) {

    // transaction belongs to user
    Transaction.belongsTo(models.User,{foreignKey:'user_id'})
    // transaction has one list asset
    Transaction.belongsTo(models.ListAsset,{foreignKey:'listAssets_id'})
    // transaction belongs to portfolioHolding 
    Transaction.belongsTo(models.PortfolioHolding,{foreignKey:'portfolioHoldings_id'})

  };
  return Transaction;
};