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
    
    // // watchlist belongs to user
    // WatchList.belongsTo(models.User,{foreignKey:'user_id'})
    
    // // watchlist has many list listAssets
    // WatchList.hasMany(models.ListAsset,{foreignKey:'listAssets_id'})

    // Watchlist.belongsto(models.User,{
    //   foreignKey:
    //   through:
    //   otherKey:
    // })

    Watchlist.belongsToMany(models.ListAsset,{
      through:'WatchlistAssets',
      otherKey:'listAssets_id',
      foreignKey:'watchlist_id'
    })

   
   // Person.belongsToMany(models.Course, columnMapping);

  };
  return Watchlist;
};