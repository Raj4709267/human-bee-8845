
import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
});

const middleware = applyMiddleware(thunk);

export const store = legacy_createStore(rootReducer, middleware);