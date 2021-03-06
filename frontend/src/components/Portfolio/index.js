import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Portfolio.css";


function Portfolio(){
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />
  }
  
  return(
    <h2>Hello From Portfolio</h2>
  )
}



export default Portfolio;