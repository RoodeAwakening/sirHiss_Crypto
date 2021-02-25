import React, { useState ,useEffect} from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {getNews} from '../../store/news'




function News() {
  // const news = useSelector((state)=>{
  //   return state.news.news.articles[1].source.id
  // })

  const news = useSelector((state)=>{
    return state.news.news.articles.map((item) => {
      return <li>{item.author}</li>
    })
  })

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNews())
  
  },[dispatch])

  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />;
  }


  


  return (
    <div>
      <h2>Hello From News</h2>
      <h2>{news}</h2>
    </div>
  );
}

export default News;
