import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {getWatchlist} from '../../store/watchlist'

function Watchlist(props){
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getWatchlist())

},[dispatch])


  return (
    <>
    <h3>Watchlist</h3>

    <h4>null</h4>
    <h4>{props.user.id}</h4>
    <button  size='large' color="inherit">GET A USER</button>
    </>
  )
}

export default Watchlist;