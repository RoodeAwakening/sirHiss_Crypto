import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../store/coins";
import { postAddWatchlist } from "../../store/watchlist";
import { deleteRemoveWatchlist } from "../../store/watchlist";
import { getWatchlist} from "../../store/watchlist";


import "./Coins.css";

function Coins() {
 

  //get user id
  const sessionuser = useSelector((state) => state.session.user);
  const userId = sessionuser.id;

  // get coins for the star button
    const watchlistAsset = useSelector((state) =>
    state?.watchlist?.watchlist?.[0]?.ListAssets.map((asset) => {
      return asset.coinCode;
    })
  );

  // add coins
  // get watchlist idwatchlistGetId

  // WATCHLST LENGTH
  
  const wholeList = useSelector((state) => {
    let arr = [];
    return state?.watchlist?.watchlist?.[0]?.ListAssets.map((asset) => {
      return arr.push(asset);
    });
  });

  const length = wholeList?.length;

  const watchlistGetId = useSelector((state) => {
    return state?.watchlist?.watchlist?.[0]?.id;
  });

  if (!watchlistGetId) {
    console.log("CREATE A WATCHLIST ID", watchlistGetId);
    // if watchlist id is not here we need to create a watchlist
    // make the post request for a new watchlist and default it with btc
  }

  const [coinId, setCoinId] = useState("");

  const dispatch = useDispatch();

  
  const addToWatchlist = (e) => {
    dispatch(postAddWatchlist(watchlistGetId, e.target.value));
  };

  // DELETE FROM WATCHLIST
  const removeFromWatchlist = (e) => {
    dispatch(deleteRemoveWatchlist(userId, e.target.value));
  };

    // GET THE WATCHLIST
      console.log('watchlistLength',length);
    useEffect(() => {
      dispatch(getWatchlist(userId));
    }, [dispatch,length]);

  // ABOVE
  const coins = useSelector((state) => {
    return state?.coins?.coins?.map((asset) => {
      // console.log('---asset',asset);
      return (
        <ul key={asset.coinCode}>
          <li>
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
                  value={asset.id}
                  className="fav_remove"
                  className="fa fa-star checked"
                  onClick={removeFromWatchlist}
                ></button>
              ) : (
                <button
                  value={asset.id}
                  className="fav_add"
                  className="fa fa-star unChecked "
                  onClick={addToWatchlist}
                ></button>
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
