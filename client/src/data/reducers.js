import {combineReducers} from "redux";
import collections from "./collection-reducers";
import discover from "./discover-reducers";

export default combineReducers({
    collections,
    discover
})