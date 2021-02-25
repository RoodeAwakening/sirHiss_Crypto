import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Watchlist from '../Watchlist'
import User from '../User'
import News from '../News'
import "./Dashboard.css";

//watchlist


function Dashboard(){
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />
  }
  //console.log(sessionUser);
  return(
    <div>
      <h2>Hello From Dashboard</h2>
      <h1>Sessionusername: {sessionUser.email}</h1>
      <h1>SessionuserId: {sessionUser.id}</h1>
      <Watchlist user={sessionUser}/>
      <User user={sessionUser}/>
      <News />
      
     
    </div>
  )
}



export default Dashboard;