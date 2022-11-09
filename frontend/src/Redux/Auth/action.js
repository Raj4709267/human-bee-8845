import * as types from "./actionTypes";

const signup_request = () => {
  return {
    type: types.SIGNUP_REQUEST,
  };
};
const signup_success = () => {
  return {
    type: types.SIGNUP_SUCCESS,
  };
};
const signup_failure = () => {
  return {
    type: types.SIGNUP_FAILURE,
  };
};

const signin_request = () => {
  return {
    type: types.SIGNIN_REQUEST,
  };
};
const signin_success = (payload) => {
  return {
    type: types.SIGNIN_SUCCESS,
    payload,
  };
};
const signin_failure = () => {
  return {
    type: types.SIGNIN_FAILURE,
  };
};

const logout_user = () => {
  return {
    type: types.USER_LOGOUT,
  };
};

export {
  logout_user,
  signin_failure,
  signin_request,
  signin_success,
  signup_failure,
  signup_request,
  signup_success,
};
