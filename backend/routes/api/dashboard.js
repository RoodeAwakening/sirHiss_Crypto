const express = require("express");
const asyncHandler = require("express-async-handler");
const router = require("./users");

//
const { Watchlist } = require("../../db/models");
const { WatchlistAsset } = require("../../db/models");
const { User } = require("../../db/models");
const { ListAsset } = require("../../db/models");
const db = require("../../db/models");

/////////WATCHLIST////////////
router.get(
  "/watchlist/:id",
  asyncHandler(async function (req, res) {
    // sent user id through the fetch call in the store and the use effect in the component
    const userId = req.params.id;

    const watchlistArr = await Watchlist.findAll({
      where: {
        user_id: userId,
      },
      include: { model: ListAsset },
      order: [
        //[ListAsset,'coinCurrentPrice', 'DESC']
        [ListAsset, "createdAt", "DESC"],
      ],
    });

    return res.json(watchlistArr);
  })
);
// in the model you can add a function to create
router.post('/watchlist/:watchlistId/coin/:coinId',asyncHandler(async function (req, res){
  const watchlist_id = req.params.watchlistId;
  const listAssets_id = req.params.coinId;
  await WatchlistAsset.create({watchlist_id,listAssets_id} )
}))

// TO TEST
// window.csrfFetch('/api/dashboard/watchlist/1/coin/3', {
//   method: 'POST',
//   body: JSON.stringify({ listAsset_id: 3, watchlist_id: 1})
// }).then(res => res.json()).then(data => console.log(data));


router.delete('/watchlist/:watchlistId/coin/:coinId',asyncHandler(async function (req, res){

}))

/////////WATCHLIST////////////

router.get(
  "/user/:id",
  asyncHandler(async function (req, res) {
    const userId = req.params.id;
    // //original code
    const user = await User.findByPk(userId);
    //console.log("---------", userId);
    return res.json(user);
  })
);

router.get(
  "/coins",
  asyncHandler(async function (req, res) {
    console.log(ListAsset);

    const coin = await ListAsset.findAll();
    //console.log("----COIN-----", coin);
    return res.json(coin);
  })
);

module.exports = router;

// router.get('/watchlist/:id', asyncHandler(async function(req, res){
//   const userId = req.params.id

//   const watchlist = await Watchlist.findAll({
//     where:{user_id:userId},
//     include:db.watchlistAssets
//   })
//   return res.json(watchlist)

// }))
