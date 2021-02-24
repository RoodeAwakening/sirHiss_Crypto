import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./PortfolioCoin.css";


function PortfolioCoin(){
  return(
    <h2>Hello From PortfolioCoin</h2>
  )
}



export default PortfolioCoin;