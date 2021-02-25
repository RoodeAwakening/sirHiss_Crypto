const SET_USER = "user/SET_USER";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const getUser = () => async (dispatch) => {
  const response = await fetch("/api/dashboard/user");
  if (!response.ok) throw response;
  const user = await response.json();
  console.log("----user----", user);
  dispatch(setUser(user));
};

export default function userReducer(state = { user: null }, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
