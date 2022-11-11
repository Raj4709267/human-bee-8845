import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionType";
import axios from "axios";

export const url = "http://localhost:8080/product";

export const getData = (category, subCategory, queryParams) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });

  return axios
    .get(`${url}${category}${subCategory ? subCategory : "/"}`, queryParams)
    .then((res) => {
    //   console.log(res.data.product);
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data.product });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_DATA_FAILURE });
    });
};
