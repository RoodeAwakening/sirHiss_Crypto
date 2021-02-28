import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../store/coins";
import { postAddWatchlist } from "../../store/watchlist";

import "./Coins.css";

function Coins() {
  // get coins for the star button
  const watchlistAsset = useSelector((state) =>
  state?.watchlist?.watchlist?.[0]?.ListAssets.map((asset) => {
    return asset.coinCode;
  })
  )
  
  
  // add coins
  // get watchlist id
  const watchlistGetId = useSelector((state) =>{
   return state?.watchlist?.watchlist?.[0]?.id})

 if (!watchlistGetId) {
   console.log('CREATE A WATCHLIST ID',watchlistGetId);
   // if watchlist id is not here we need to create a watchlist
   // make the post request for a new watchlist and default it with btc
 }

const [coinId, setCoinId] = useState('')

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(postAddWatchlist(watchlistGetId,coinId))
  },[dispatch,coinId])



  // ABOVE
  const coins = useSelector((state) => {
    return state?.coins?.coins?.map((asset) => {
      // console.log('---asset',asset);
      return (
        <ul key={asset.coinCode}>
          <li >
            <div className="coins_left">
              <img src={asset.coinLogo} />
              <div className="coins_code">
                <div id="coins_coin-CODE">{asset.coinCode}</div>
                <div id="coins_coin-NAME">{asset.coinName}</div>
               
              </div>
            </div>
            <div className="coins_right">
              ${asset.coinCurrentPrice}
              {watchlistAsset?.includes(asset.coinCode) ? (
                <button
                  className="fav_remove"
                  className="fa fa-star checked"
                ></button>
              ) : (
                <button className="fav_add" className="fa fa-star unChecked " onClick={(e)=>setCoinId(asset.id) }></button>
              )}
            </div>
          </li>
        </ul>
      );
    });
  });

  //const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return (
    <div className="coins_box">
      <div className="coins_container">
        <h3>Your Eye on the market</h3>

        <div className="coins_items">
          <div className="coins_each">{coins}</div>
        </div>
      </div>
    </div>
  );
}

export default Coins;
