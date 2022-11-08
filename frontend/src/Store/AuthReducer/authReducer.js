import * as types from "./actionTypes";
const token=localStorage.getItem("token");
const initialState = {
  data: {
    isAuth: (token)?true:false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};