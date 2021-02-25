import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {getUser} from '../../store/user'

export default function User(props){
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUser())
      
    }, [dispatch])


    return (
      <>
      <h2>look here {props.user.id}</h2>
      </>
    )
  }


