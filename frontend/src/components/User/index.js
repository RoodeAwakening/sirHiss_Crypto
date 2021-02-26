import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {  useSelector } from "react-redux";
import {getUser} from '../../store/user'

export default function User(props){
  const sessionuser = useSelector((state)=> state.session.user)
  const userId = sessionuser.id

  // useSelector gets the state of stuff and i can pass to a variable
  const activeUser = useSelector((state)=> state.user.user)
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUser(userId))
      
    }, [dispatch])


    return (
      <>
      <h2>Available Funds ${activeUser?.funds}</h2>
      </>
    )
  }


