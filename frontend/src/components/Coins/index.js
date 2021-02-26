import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../../store/coins";

import "./Coins.css";

function Coins(){

const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getCoins())
},[dispatch])

return (
<div>
  
  <div className='coins_container'>
  <h1>Coins here</h1>
  </div>
  </div>
)

}

export default Coins;