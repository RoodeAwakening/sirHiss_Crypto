const SET_COINS = "coins/SET_COINS"

//action creator
const setCoins = (coins) => {
  return {
    type: SET_COINS,
    payload: coins,
  };
};

//fetch
export const getCoins = () => async (dispatch) => {
  //get from api folder
  const response = await fetch(`/api/dashboard/coins`)
  if(!response.ok) throw response
  const coins = await response.json()
  console.log('--------coins-------',coins);
  dispatch(setCoins(coins))
}


//reducer
export default function coinsReducer(state = { coins: null }, action) {
  switch(action.type){
    case SET_COINS:
      return {...state,coins:action.payload}
    default:
      return state;
  }
}