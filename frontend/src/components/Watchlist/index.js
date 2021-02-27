import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlist } from "../../store/watchlist";
import "./Watchlist.css";
import BTC from "../../images/coins/BTC.png";

function Watchlist(props) {
  const sessionuser = useSelector((state) => state.session.user);
  const userId = sessionuser.id;

  const watchlistAsset = useSelector((state) => {
    return state?.watchlist?.watchlist?.[0]?.ListAssets?.map((asset) => {
      return (
        <ul>
          <li>
            <div className="watchlist_left">
              <img src={asset.coinLogo} />
              <div className="wathlist_code">
                <div id="watchlist_coin-CODE">{asset.coinCode}</div>
                <div id="watchlist_coin-NAME">{asset.coinName}</div>
              </div>
            </div>
            <div className="watchlist_right">${asset.coinCurrentPrice}</div>
          </li>
        </ul>
      );
    });
  });
  console.log("000000", watchlistAsset);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchlist(userId));
  }, [dispatch]);

  return (
    <>
      <div className="watchlist_sidebar">
        <h3>Your Watchlist</h3>

        <div className="watchlist_items">
          <div>
            {watchlistAsset}
            <h5>Add More to your watchlist</h5>
            </div>
        </div>
      </div>
    </>
  );
}

export default Watchlist;
