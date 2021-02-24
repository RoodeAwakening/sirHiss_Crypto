import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Dashboard.css";


function Dashboard(){
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />
  }
  //console.log(sessionUser);
  return(
    <div>
      <h2>Hello From Dashboard</h2>
      <h1>username: {sessionUser.username}</h1>
    </div>
  )
}



export default Dashboard;