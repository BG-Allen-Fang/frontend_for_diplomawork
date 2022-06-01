import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    PIN_SUCCESS,
    PIN_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    FORGOT_PASS_SUCCESS,
    FORGOT_PASS_FAIL,
    CHANGE_PASS_SUCCESS,
    CHANGE_PASS_FAIL,
} from "../../../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case PIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case PIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case ACTIVATION_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case ACTIVATION_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };

        case FORGOT_PASS_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case FORGOT_PASS_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case CHANGE_PASS_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,
            };
        case CHANGE_PASS_FAIL:
            return {
                ...state,
                isLoggedIn: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}
