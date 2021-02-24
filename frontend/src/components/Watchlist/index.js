import React, {useState} from 'react'

function Watchlist(props){
const [coins, setCoins] = useState("coinStateHere");
  
  return (
    <>
    <h3>Watchlist</h3>

    <h4>{coins}</h4>
    <h4>{props.user.id}</h4>
    </>
  )
}

export default Watchlist;