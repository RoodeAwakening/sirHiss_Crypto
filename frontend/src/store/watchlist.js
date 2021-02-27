const SET_WATCHLIST = "watchlist/SET_WATCHLIST";
const REMOVE_WATCHLIST = "watchlist/REMOVE_WATCHLIST";
const ADD_WATCHLIST = "watchlist/ADD_WATCHLIST";

//action creator - get watchlist
const setWatchlist = (watchlist) => {
  return {
    type: SET_WATCHLIST,
    payload: watchlist,
  };
};

//action creator - delete from watchlist
const removeWatchlist = (itemId) => {
  return {
    trype: REMOVE_WATCHLIST,
  };
};

//action creator - add to watchlist
const addWatchlist = (itemId) => {
  return {
    trype: ADD_WATCHLIST,
  };
};


//--------------------------------
//fetch
export const getWatchlist = (userId) => async (dispatch) => {
  //get from api folder
  const response = await fetch(`/api/dashboard/watchlist/${userId}`);
  if (!response.ok) throw response;
  const watchlist = await response.json();

  dispatch(setWatchlist(watchlist));
};
// add to watchlist
export const getAddWatchlist = (coin) => async (dispatch) => {
  const {coinId} = coin
  const response = await ('/api/dashboard/watchlist',{
    method: "POST",
    body: JSON.stringify({
      coinId
    })
  })
  const data = await response.json();
  dispatch(addWatchlist(data.coinId));
  return response;
}

// remove from watchlist
export const getRemoveWatchlist = () => async (dispatch) => {
  const response = await ("/api/dashboard/watchlist",
  {
    method: "DELETE",
  });
  dispatch(removeWatchlist());
  return response;
};
//-----------------------------------
//reducer
// export default function watchlistReducer(state = { watchlist: null }, action) {
//   let newState;
//   switch(action.type){
//     case SET_WATCHLIST:
//       return {...state,watchlist:action.payload}
//       case REMOVE_ITEM:
//     default:
//       return state;
//   }

export default function watchlistReducer(state = { watchlist: null }, action) {
  let newState;
  switch (action.type) {
    case SET_WATCHLIST:
      newState = Object.assign({}, state);
      newState.watchlist = action.payload;
      //console.log('newstate',newState.watchlist.[0].ListAssets);
      return newState;
    default:
      return state;
  }
}
