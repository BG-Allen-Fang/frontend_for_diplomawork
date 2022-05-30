import {combineReducers} from "redux";
import vacancyReducer from "./reducers/vacancyReducer";
import profileReducer from "./reducers/profile";
import authReducer from "./reducers/auth";
import message from "./reducers/message";

export default combineReducers({
    profilePage: profileReducer,
    vacancyPage: vacancyReducer,
    auth: authReducer,
    message
});