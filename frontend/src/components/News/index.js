import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getNews } from "../../store/news";

import "./News.css";

function News() {
  const news = useSelector((state) => {
    return state?.news?.news?.articles?.map((item) => {
      return (
        <div className='news_news-article'>
          <ul>
            <a href={item.url}>
              <li>{item.title}</li>
              <li>
                <img src={item.urlToImage} />
              </li>
            </a>
            <li>{item.content}</li>
          </ul>
        </div>
      );
    });
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h2>Hello From News</h2>
      <div className="news_news-block">
        <div className='news_news-article'>{news}</div>
      </div>
    </div>
  );
}

export default News;
