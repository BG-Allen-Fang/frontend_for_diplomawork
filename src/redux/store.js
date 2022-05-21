import {applyMiddleware, legacy_createStore as createStore} from "redux";
import rootReducers from "./combineReducers";
import thunk from "redux-thunk";

const middleware = [thunk];

let store = createStore(
    rootReducers,
    applyMiddleware(...middleware));

export default store;
window.store = store;