// This file will contain all the actions specific to the session user's information and the session user's Redux reducer.

import * as actions from "../store/actionTypes";
import { csrfFetch } from "./csrf";


const setUser = (user) => {
  return {
    type: actions.SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: actions.REMOVE_USER,
  };
};


export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
      
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

// session reducer that will hold the current session user's information.
export default function sessionReducer(state = { user: null }, action) {
  let newState;
  switch (action.type) {
    case actions.SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case actions.REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
}
