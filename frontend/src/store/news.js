const SET_NEWS = 'news/SET_NEWS'

const setNews = (news) => {
  return {
    type: SET_NEWS,
    payload: news,
  }
}

export const getNews = () => async (dispatch) => {
  //get from api folder
  const response = await fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=57584c410b2948c58a38d8f322c08085')
  if(!response.ok) throw response
  const news = await response.json()
  console.log('--------news-------',news);
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