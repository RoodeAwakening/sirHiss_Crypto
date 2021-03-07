import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatchlist, deleteRemoveWatchlist } from "../../store/watchlist";
import "./Watchlist.css";
import BTC from "../../images/coins/BTC.png";

function Watchlist(props) {
  const sessionuser = useSelector((state) => state.session.user);
  const userId = sessionuser.id;

  const watchlistGetId = useSelector((state) => {
    return state?.watchlist?.watchlist?.[0]?.id;
  });

  // WATCHLST LENGTH
  const wholeList = useSelector((state) => {
    let arr = [];
    return state?.watchlist?.watchlist?.[0]?.ListAssets.map((asset) => {
      return arr.push(asset);
    });
  });

  const length = wholeList?.length;

  // DELETE FROM WATCHLIST
  const removeFromWatchlist = (e) => {
    dispatch(deleteRemoveWatchlist(userId, e.target.value));
  };
  // GET THE WATCHLIST
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchlist(userId));
  }, [dispatch, length]);


  const watchlistAsset = useSelector((state) => {
    return state?.watchlist?.watchlist?.[0]?.ListAssets?.map((asset) => {
      return (
        <ul key={asset.coinCode}>
          <li key={asset.coinCode}>
            <div className="watchlist_left">
              <img src={asset.coinLogo} />
              <div className="watchlist_code">
                <div id="watchlist_coin-CODE">{asset.coinCode}</div>
                <div id="watchlist_coin-NAME">{asset.coinName}</div>
              </div>
            </div>
            <div className="watchlist_right">
              ${asset.coinCurrentPrice}
              <button
                value={asset.id}
                className="add_remove"
                className="fa fa-star checked"
                onClick={removeFromWatchlist}
              ></button>
            </div>
          </li>
        </ul>
      );
    });
  });

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
