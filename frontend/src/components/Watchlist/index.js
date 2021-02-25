import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWatchlist } from "../../store/watchlist";

import "./Watchlist.css";

function Watchlist(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWatchlist());
  }, [dispatch]);

  return (
    <>
      <div className="watchlist_sidebar">
        <h3>WATCHLIST HERE</h3>

        <h4>{props.user.id}</h4>
        <div className='watchlist_items'>
          <ul>
          <li>holdergggg</li>
          <li>holder</li>
          <li>hold4er</li>
          <li>holder</li>
          <li>h5older</li>
          <li>holder</li>
          <li>hoglder</li>
          <li>ho4der</li>
          <li>ho1lder</li>
          <li>holder</li>
          <li>ho3lder</li>
          <li>1holder</li>
          <li>holder</li>
          <li>hold4er</li>
          <li>holder</li>
          <li>h5older</li>
          <li>holder</li>
          <li>hoglder</li>
          <li>ho4der</li>
          <li>ho1lder</li>
          <li>holder</li>
          <li>ho3lder</li>
          <li>1holder</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Watchlist;
