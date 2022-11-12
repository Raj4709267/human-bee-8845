import axios from "axios";
import { ADDTO_WISHLIST_FAILURE, ADDTO_WISHLIST_REQUEST } from "./actionType";

const url = "https://fashionclub.onrender.com/wishlist/add";

export const addToWishlist = (token, userId, productId) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      userId,
      productId,
    },
  };
  dispatch({ type: ADDTO_WISHLIST_REQUEST });

  return axios
    .post(url, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADDTO_WISHLIST_FAILURE });
    });
};
