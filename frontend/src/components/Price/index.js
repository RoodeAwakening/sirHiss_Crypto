import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./Price.css";


function Price(){
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />
  }
  
  return(
    <h2>Hello From Price</h2>
  )
}



export default Price;