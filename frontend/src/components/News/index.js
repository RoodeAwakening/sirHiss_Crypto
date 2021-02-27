import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { getNews } from "../../store/news";

import "./News.css";
// YOU CAN USE THIS IF YOU HAVE A WORKING NEWS API
// function News() {
//   const news = useSelector((state) => {
//     return state?.news?.news?.articles?.map((item) => {
//       return (
// <div className='news_news-article'>
//   <ul>
//     <a href={item.url}>
//       <li>{item.title}</li>
//       <li>
//         <img src={item.urlToImage} className='news_news-image'/>
//       </li>
//     </a>
//     <li>{item.content}</li>
//   </ul>
// </div>
//       );
//     });
//   });

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getNews());
// }, [dispatch]);

//   return (
//     <div>
//       <h2>Hello From News</h2>
//       <div className="news_news-block">
//         <div className='news_news-article'>{news}</div>
//       </div>
//     </div>
//   );
// }

function News() {
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className='news_box'>
      <div className='news_wrapper'>
      <div className="news_news-block">
        <div className="news_news-article">
          
        <NavLink to='/news'><h2 > news </h2></NavLink>
          <div className="news_news-article">
              <a href="https://www.engadget.com/tesla-to-take-bitcoin-payments-140109988.html">
            <ul>
                <li className='news_title'>
                  Tesla buys $1.5 in Bitcoin, will soon accept it as payment
                </li>
                <li>
                  <img
                    src="https://s.yimg.com/os/creatr-uploaded-images/2021-02/389f89e0-6a11-11eb-b5c5-309f2241e56a"
                    className="news_news-image"
                    alt='articleImage'
                  />
                </li>
              <li className='news_content'>
                "Elon Musks cryptocurrency hype was more than just idle talk.
                CNBCreports that Tesla not only bought $1.5 billion worth of
                Bitcoin to help diversify and maximize its returns, but will
                start taking pay… [+1182 chars]"
              </li>
            </ul>
              </a>
          </div>
          <div className="news_news-article">
              <a href="https://www.theverge.com/2021/2/9/22275243/teslas-bitcoin-purchase-clashes-climate-change-mission">
            <ul>
                <li className='news_title'>
                  Tesla’s $1.5 billion bitcoin purchase clashes with its
                  environmental aspirations
                </li>
                <li>
                  <img
                    src="https://cdn.vox-cdn.com/thumbor/eQST6cDSwG_MASzsxTUv3igFdxU=/0x430:6000x3571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22293241/1231048263.jpg"
                    className="news_news-image"
                    alt='articleImage'
                  />
                </li>
              <li className='news_content'>
                Tesla, led by Elon Musk, confirmed that it purchased about $ 1.5
                billion in bitcoin in January and expects to start accepting it
                as a payment in the future. | Photo by Artur Widak/NurPhoto via
                Getty… [+6118 chars]
              </li>
            </ul>
              </a>
          </div>
          <div className="news_news-article">
              <a href="https://www.wired.com/story/would-you-trade-bitcoin-tesla/">
            <ul>
                <li className='news_title'>Would You Trade a Bitcoin for a Tesla?</li>
                <li>
                  <img
                    src="https://media.wired.com/photos/6021da4ff1bf194f33695dc3/191:100/w_1280,c_limit/business_tesla-bitcoin_1229893729.jpg"
                    className="news_news-image"
                    alt='articleImage'
                  />
                </li>
              <li className='news_content'>
                For a brief moment on Sunday, before Tesla said it had invested
                $1.5 billion in bitcoin and planned to let people use the
                cryptocurrency to pay for its cars, bitcoins price could be
                expressed with a … [+3302 chars]
              </li>
            </ul>
              </a>
          </div>
          <div className="news_news-article">
              <a href="http://techcrunch.com/2021/02/12/jack-dorsey-and-jay-z-invest-23-6-million-to-fund-bitcoin-development/">
            <ul>
                <li className='news_title'>
                  Jack Dorsey and Jay Z invest $23.6 million to fund Bitcoin
                  development
                </li>
                <li>
                  <img
                    src="https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-887657568.jpg?w=600"
                    className="news_news-image"
                    alt='articleImage'
                  />
                </li>
              <li className='news_content'>
                Twitter and Square CEO Jack Dorsey and rapper Jay Z have created
                an endowment to fund bitcoin development initially in Africa and
                India, Dorsey said Friday. The duo is putting 500 bitcoin, which
                is … [+3984 chars]
              </li>
            </ul>
              </a>
          </div>
          <div className="news_news-article">
              <a href="http://techcrunch.com/2021/02/08/tesla-buys-1-5b-in-bitcoin-may-accept-the-cryptocurrency-as-payment-in-the-future/">
            <ul>
                <li className='news_title'>
                  Tesla buys $1.5B in bitcoin, may accept the cryptocurrency as
                  payment in the future
                </li>
                <li>
                  <img
                    src="https://techcrunch.com/wp-content/uploads/2020/09/tesla-glitch1.jpg?w=712"
                    className="news_news-image"
                    alt='articleImage'
                  />
                </li>
              <li className='news_content'>
                Today in an SEC filing, Tesla disclosed that it has acquired
                $1.5 billion in bitcoin, the popular cryptocurrency. Moreover,
                the company noted that it may also accept bitcoin in the future
                as a form o… [+2230 chars]
              </li>
            </ul>
              </a>
          </div>
          <div className="news_news-article">
              <a href="https://www.wired.com/story/gadget-lab-podcast-491/">
            <ul>
                <li className='news_title'>
                  This Cryptocurrency Is Really Burning a Hole in My Pocket
                </li>
                <li>
                  <img
                    src="https://media.wired.com/photos/602589a9e27a393fd0c185af/191:100/w_1280,c_limit/Gear-Tesla-GL-Podcast-1227575736.jpg"
                    className="news_news-image"
                    alt='articleImage'
                  />
                </li>
              <li className='news_content'>
                When Bitcoin first appeared out of digital thin air, it was
                hailed as having the potential to upend the way people spent
                money. But more than a decade later, cryptocurrency is still
                only trickling in… [+2039 chars]
              </li>
            </ul>
              </a>
          </div>

          <div className="news_news-article">
              <a href="https://www.cnn.com/2021/02/21/investing/stocks-week-ahead/index.html">
            <ul>
                <li className='news_title'>How bitcoin is like a teenager</li>
                <li>
                  <img
                    src="https://cdn.cnn.com/cnnnext/dam/assets/201124080935-02-bitcoin---stock-super-tease.jpg"
                    className="news_news-image"
                    alt='articleImage'
                  />
                </li>
              <li className='news_content'>
                The euphoria that's swept through markets certainly plays a
                role, as investors chasing returns in a low-interest world eye
                alternative investments.[+2029 chars]{" "}
              </li>
            </ul>
              </a>
          </div>
          <div className="news_news-article">
              <a href="https://gizmodo.com/miami-may-start-paying-city-employees-in-bitcoin-1846258140">
            <ul>
                <li className='news_title'>Miami May Start Paying City Employees in Bitcoin</li>
                <li>
                  <img
                    src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/yz0ysmubeluo7pxjdw9p.jpg"
                    className="news_news-image"
                    alt='articleImage'
                  />
                </li>
              <li className='news_content'>
                Miamis mayor, Francis Suarez, is champing at the bit to rebrand
                his city as a haven for tech entrepreneurs and the tax dollars
                that come in their wake. His latest branding effort involves a
                push to m… [+2454 chars]
              </li>
            </ul>
              </a>
          </div>
        </div>
        </div>
      </div>
      <h2>....Searching for news</h2>
    </div>
  );
}

export default News;
