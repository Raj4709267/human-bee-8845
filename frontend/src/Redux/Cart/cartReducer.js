import * as types from "./actionTypes";

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_CART: {
      return {
        ...state,
        cart: [...payload],
      };
    }
    // case types.REMOVE_DATA_FROM_CART: {
    //   console.log("remove", payload, state.cart);
    //   return {
    //     ...state,
    //     cart: state.cart.splice(payload, state.cart.length - 1),
    //     // cart: [ ...state.cart ].splice(payload, 1)
    //   };
    // }
    default:
      return state;
  }
};
