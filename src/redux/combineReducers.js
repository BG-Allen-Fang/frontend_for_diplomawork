import {combineReducers} from "redux";
import vacancyReducer from "./reducers/vacancyReducer";
import authReducer from "./reducers/auth";
import message from "./reducers/message";

export default combineReducers({
    vacancyPage: vacancyReducer,
    auth: authReducer,
    message
});