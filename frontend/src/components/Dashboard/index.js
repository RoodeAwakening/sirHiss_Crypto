import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Watchlist from "../Watchlist";
import User from "../User";
import News from "../News";
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
        <h2>Hello From Dashboard</h2>
        <h1>Sessionusername: {sessionUser.email}</h1>
        <h1>SessionuserId: {sessionUser.id}</h1>
        <User user={sessionUser} />
        <News />
      </div>
      <div className="dashboard_right">

        <Watchlist user={sessionUser} />
      </div>
    </div>
  );
}

export default Dashboard;
