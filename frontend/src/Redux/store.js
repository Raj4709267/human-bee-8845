import {combineReducers, legacy_createStore} from "redux"
import { AuthReducer } from "./Auth/AuthReducer"


const store= legacy_createStore(combineReducers({AuthReducer}));

export {store}