import axios from "axios";
import {
  ADDTO_WISHLIST_FAILURE,
  ADDTO_WISHLIST_REQUEST,
  ADDTO_WISHLIST_SUCCESS,
} from "./actionType";

const url = "https://fashionclub.onrender.com/wishlist/add";

export const addToWishlist = (token, productId, userId) => (dispatch) => {

  const config = {
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZlMDdmYjYxY2M0ZDBkOWVjOGNmZmEiLCJpYXQiOjE2NjgyMzg5ODN9.0UQiCHb7jEeWw6zCSAeuh39z0rhQieM9ySST-mSwMJ4`,
      productid: productId,
      userid: userId
    },
  };
  dispatch({ type: ADDTO_WISHLIST_REQUEST });

  return axios
    .post(url, config)
    .then((res) => {
      console.log(res);
      //   dispatch({ type: ADDTO_WISHLIST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADDTO_WISHLIST_FAILURE });
    });
};
