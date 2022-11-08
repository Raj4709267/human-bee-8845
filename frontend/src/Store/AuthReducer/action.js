import * as types from "./actionTypes";
import axios from "axios";

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "https://bitrix24-backend.herokuapp.com/login",
    data: payload,
  })
    .then((r) => {
      console.log(r,"data");
      localStorage.setItem("token", r.data.token);
      // localStorage.setItem("", r.data.token);           
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      return types.LOGIN_SUCCESS;
    })
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};