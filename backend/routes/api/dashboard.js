const express = require("express");
const asyncHandler = require("express-async-handler");
const router = require("./users");
//
const {Watchlist} = require('../../db/models')
const {User} = require('../../db/models')

// owned stocks
// watchlist 
// top 10 cryptos
// news



router.get('/watchlist', asyncHandler(async function(req, res){
  const watchlist = await Watchlist.findAll()

  return res.json(watchlist)
  
}))

router.get('/user', asyncHandler(async function(req, res){
  const user = await User.findAll()

  return res.json(user)
  
}))

module.exports = router;