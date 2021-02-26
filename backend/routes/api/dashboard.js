const express = require("express");
const asyncHandler = require("express-async-handler");
const router = require("./users");
//
const {Watchlist} = require('../../db/models')
const {User} = require('../../db/models')
const db = require('../../db/models');
// owned stocks
// watchlist 
// top 10 cryptos
// news

router.get('/watchlist/:id', asyncHandler(async function(req, res){
  // sent user id through the fetch call in the store and the use effect in the component
  const userId = req.params.id
  
  const watchlist = await Watchlist.findAll({
    where:{
      user_id:userId
    },
   
    
  })
  
  return res.json(watchlist)
  
}))

router.get('/user/:id', asyncHandler(async function(req, res){
  const userId = req.params.id
  // //original code
  const user = await User.findByPk(userId)
  console.log('---------',userId);
  return res.json(user)
  
}))

module.exports = router;



// router.get('/watchlist/:id', asyncHandler(async function(req, res){
//   const userId = req.params.id
  
//   const watchlist = await Watchlist.findAll({
//     where:{user_id:userId},
//     include:db.watchlistAssets
//   })
//   return res.json(watchlist)
  
// }))