import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { cartReducer } from "./Cart/cartReducer";
import { addReducer } from "./Add/addReducer";
import thunk from "redux-thunk";

const store = legacy_createStore(
  combineReducers({ AuthReducer, AppReducer,cartReducer,addReducer}),
  applyMiddleware(thunk)
);

export { store };
