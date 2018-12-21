import {createStore, combineReducers, applyMiddleware} from "redux";

import user from "./reducers/userReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const myLogger = () => (next) => (action) => {
    console.log("Logged Action", action);
    next(action);
};

export default createStore(
    combineReducers({
        user       
    }), 
    {}, 
    applyMiddleware(myLogger, thunk, promise())
);