import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Watchlist from "../Watchlist";
import User from "../User";
import News from "../News";
import Coins from "../Coins";
import DashboardChart from "../DashboardChart";
import "./Dashboard.css";

//watchlist

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />;
  }
  //console.log(sessionUser);
  return (
    <div className="dashboard_container">
      <div className="dashboard_left">

        <User user={sessionUser} />
        <DashboardChart />
        
        <Coins />
        <News />
      </div>
      <div className="dashboard_right">
        <div className="dashboard_right_container">
          <Watchlist user={sessionUser} />
        </div>
      </div>
      
      <div className="splash_footer"></div>
    </div>
  );
}

export default Dashboard;
