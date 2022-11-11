import * as types from "./actionTypes";

export const getAddress = (data) => (
    console.log('getAdd', data),
    {
    type:types.GET_ADDRESS,
    payload: data
});

export const fetchAddress = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/address")
            .then((response) => response.json())
            .then((data) =>
                dispatch(getAddress(data))
            );
    };
}