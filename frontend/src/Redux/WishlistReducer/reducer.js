import React from "react";
import {
  ADDTO_WISHLIST_FAILURE,
  ADDTO_WISHLIST_REQUEST,
  ADDTO_WISHLIST_SUCCESS,
} from "./actionType";

const initialState = {
  wishlistData: [],
  isLoading: false,
  isError: true,
  addSuccess: false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADDTO_WISHLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADDTO_WISHLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishlistData: [...payload],
        addSuccess: true,
      };
    case ADDTO_WISHLIST_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        addSuccess: false,
      };
    default:
      return state;
  }
};

export { reducer };
