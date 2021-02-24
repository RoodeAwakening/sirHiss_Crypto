import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import "./PriceCoin.css";


function PriceCoin(){
  return(
    <h2>Hello From PriceCoin</h2>
  )
}



export default PriceCoin;