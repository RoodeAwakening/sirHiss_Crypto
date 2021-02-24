import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./News.css";


function News(){
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />
  }
  
  return(
    <h2>Hello From News</h2>
  )
}



export default News;