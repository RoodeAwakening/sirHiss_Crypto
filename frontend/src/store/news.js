const SET_NEWS = 'news/SET_NEWS'

const setNews = (news) => {
  return {
    type: SET_NEWS,
    payload: news,
  }
}





// add api key to .env
// const apiKey='57584c410b2948c58a38d8f322c08085'

// const newsApi = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`




// export const getNews = () => async (dispatch) => {
//   //get from api folder
//   const response = await fetch(newsApi)
//   if(!response.ok) throw response
//   const news = await response.json()
//     dispatch(setNews(news))
//}

export const getNews = () => async (dispatch) => {
  //get from api folder
  const response = await fetch('http://api.mediastack.com/v1/news?access_key=cfea6637ef1847eda04ad79a5f995029&languages=en&keywords=crypto+currency&image=true')
  if(!response.ok) throw response
  const news = await response.json()
  console.log('---',news);
    dispatch(setNews(news))
}







export default function newsReducer(state = { news: null }, action) {
  switch(action.type){
    case SET_NEWS:
      return {...state,news:action.payload}
    default:
      return state;
  }
}