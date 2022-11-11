import * as types from "./actionTypes";

export const addToCart = (data) => ({
    type: types.ADD_CART,
    payload: data
});

export const removeDataFromCart=(data)=>({
    type: types.REMOVE_DATA_FROM_CART,
    payload: data
})