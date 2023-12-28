import { combineReducers } from "redux";

/* import authReducer from './auth.reducer.js' */

import newsReducer from "./news.reducer";

import newReducer from './new.reducer'

const RootReducer = combineReducers({
    news: newsReducer,
    new: newReducer,
});

export default RootReducer;