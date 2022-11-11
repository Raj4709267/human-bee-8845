import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "./Auth/AuthReducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";

const store = legacy_createStore(
  combineReducers({ AuthReducer, AppReducer }),
  applyMiddleware(thunk)
);

export { store };
