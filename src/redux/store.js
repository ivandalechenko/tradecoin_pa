import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import userReducer from "./userReducer";

const combinedReducers = combineReducers({
    userReducer
})

export const store = createStore(combinedReducers, applyMiddleware(thunk));