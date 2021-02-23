"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ListAssets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      coinCode: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      coinName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      coinLogo: {
        type: Sequelize.STRING,
      },
      coinCurrentPrice: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ListAssets");
  },
};
