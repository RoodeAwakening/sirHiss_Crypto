'use strict';



module.exports = (sequelize, DataTypes) => {
  const Watchlist = sequelize.define('Watchlist', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model:"Users"}
    },
     
  }, {});
  Watchlist.associate = function(models) {
    

    Watchlist.belongsToMany(models.ListAsset,{
      through:'WatchlistAssets',
      otherKey:'listAssets_id',
      foreignKey:'watchlist_id'
    })

   
 

  };
  return Watchlist;
};