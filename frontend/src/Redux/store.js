import {combineReducers, legacy_createStore,applyMiddleware} from "redux"
import { AuthReducer } from "./Auth/AuthReducer"
import { cartReducer } from "./Cart/cartReducer";
import { addReducer } from "./Add/addReducer";
import thunk from "redux-thunk";


const rootReducer=combineReducers({AuthReducer,cartReducer,addReducer})

const store= legacy_createStore(rootReducer,applyMiddleware(thunk));
   

export {store}