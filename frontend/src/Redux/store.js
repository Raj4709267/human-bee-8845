import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { cartReducer } from "./Cart/cartReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(
  combineReducers({ AuthReducer, AppReducer ,cartReducer}),
  applyMiddleware(thunk)
);

export { store };
