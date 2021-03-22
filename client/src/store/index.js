import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";

const rootReducers = combineReducers({
    AuthReducer
});
const middlewares = [thunkMiddleware];
const Store = createStore(rootReducers, applyMiddleware(thunkMiddleware(...middlewares)));

export default Store;