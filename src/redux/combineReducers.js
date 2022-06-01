import {combineReducers} from "redux";
import vacancyReducer from "./reducers/userSide/vacancyReducer";
import meetingReducer from "./reducers/commissionSide/meeting";
import profileReducer from "./reducers/userSide/profile";
import authReducer from "./reducers/userSide/auth";
import message from "./reducers/message";

export default combineReducers({
    meetingPage: meetingReducer,
    profilePage: profileReducer,
    vacancyPage: vacancyReducer,
    auth: authReducer,
    message
});