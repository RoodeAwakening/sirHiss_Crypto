const SET_WATCHLIST = "watchlist/SET_WATCHLIST"

//action creator
const setWatchlist = (watchlist) => {
  return {
    type: SET_WATCHLIST,
    payload: watchlist,
  };
};

//fetch
export const getWatchlist = () => async (dispatch) => {
  //get from api folder
  const response = await fetch('/api/dashboard/watchlist')
  if(!response.ok) throw response
  const watchlist = await response.json()
  console.log('--------watchlist-------',watchlist);
  dispatch(setWatchlist(watchlist))
}

//reducer
export default function watchlistReducer(state = { watchlist: null }, action) {
  switch(action.type){
    case SET_WATCHLIST:
      return {...state,watchlist:action.payload}
    default:
      return state;
  }
}