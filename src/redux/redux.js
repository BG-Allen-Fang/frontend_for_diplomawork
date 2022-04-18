import {combineReducers, createStore} from "redux";
import signUpReducer from "./signUpReducer";
import signInReducer from "./signInReducer";
import vacancyReducer from "./vacancyReducer";

let reducers = combineReducers({
    signUpPage: signUpReducer,
    signInPage: signInReducer,
    vacancyPage: vacancyReducer
});

let store = createStore(reducers);

export default store;