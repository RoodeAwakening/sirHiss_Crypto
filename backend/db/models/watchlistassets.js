'use strict';
module.exports = (sequelize, DataTypes) => {
  const WatchlistAsset = sequelize.define('WatchlistAsset', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    watchlist_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Watchlists" }
    },
    listAssets_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "ListAssets" }
    },
  }, {});
  WatchlistAsset.associate = function(models) {
    WatchlistAsset.belongsTo(models.Watchlist,{foreignKey:"watchlist_id"})
    WatchlistAsset.belongsTo(models.ListAsset,{foreignKey:"listAssets_id"})
  };
  return WatchlistAsset;
};