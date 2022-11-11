import * as types from "./actionTypes";

const initialState={
    address:[]
}

export const addReducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_ADDRESS:{
            return {
                ...state,
                address: [...state.address,payload]
            }

        }
        default:
            return state;

    }

}