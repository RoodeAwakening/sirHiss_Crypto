'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      listAssets_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "ListAssets" }
      },
      portfolioHoldings_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "PortfolioHoldings" }
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      coinCount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      transactionType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  }
};