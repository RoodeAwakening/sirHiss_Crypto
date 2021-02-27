import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../store/coins";

import "./Coins.css";

function Coins() {
  const watchlistAsset = useSelector((state) =>
    state?.watchlist?.watchlist?.[0]?.ListAssets.map((asset) => {
      return asset.coinCode;
    })
  );

  console.log("---newlist", watchlistAsset);

  // ABOVE
  const coins = useSelector((state) => {
    return state?.coins?.coins?.map((asset) => {
      // console.log('---asset',asset);
      return (
        <ul>
          <li key={asset.coinCode}>
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
                <button className="fav_add" className="fa fa-star unChecked "></button>
              )}
            </div>
          </li>
        </ul>
      );
    });
  });

  const dispatch = useDispatch();
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
