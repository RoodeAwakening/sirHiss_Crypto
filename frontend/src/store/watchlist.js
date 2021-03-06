import { csrfFetch } from "./csrf";

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
const removeWatchlist = () => {
  return {
    type: REMOVE_WATCHLIST,
  };
};

//action creator - add to watchlist
const addWatchlist = (coinId) => {
  return {
    type: ADD_WATCHLIST,
    payload: coinId,
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
  return response;
};

// add to watchlist
export const postAddWatchlist = (watchlistGetId, coinId) => async (
  dispatch
) => {
  const response = await csrfFetch(
    `/api/dashboard/watchlist/${watchlistGetId}/coin/${coinId}`,
    {
      method: "POST",
      body: JSON.stringify({
        watchlistGetId,
        coinId,
      }),
    }
  );
  const data = await response.json();
  dispatch(addWatchlist(data.listAssets_id));
  return response;
};

// remove from watchlist
export const deleteRemoveWatchlist = (watchlistId, coinId) => async (
  dispatch
) => {
  const response = await csrfFetch(
    `/api/dashboard/watchlist/${watchlistId}/coin/${coinId}`,
    {
      method: "DELETE",
    }
  );
  dispatch(removeWatchlist());
  return response;
};
//-----------------------------------
//reducer
export default function watchlistReducer(state = { watchlist: null }, action) {
  switch (action.type) {
    case SET_WATCHLIST:
      return { ...state, watchlist: action.payload };
    case ADD_WATCHLIST:
      return { ...state, watchlist: action.payload };
    case REMOVE_WATCHLIST:
      return { ...state, watchlist: action.payload };

    default:
      return state;
  }

  // THIS IS THE NEW ONE I WAS THINKING MIGHT WORK TO STORE STATE
  // export default function watchlistReducer(state = { watchlist: null }, action) {
  //   let newState;
  //   switch (action.type) {
  //     case SET_WATCHLIST:
  //       newState = Object.assign({}, state);
  //       newState.watchlist = action.payload;
  //       //console.log('newstate',newState.watchlist.[0].ListAssets);
  //       return newState;
  //     default:
  //       return state;
  //   }
}
