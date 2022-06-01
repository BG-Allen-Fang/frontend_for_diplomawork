import {
    GET_COMMISSION_SUCCESS, MEETING_CREATE_FAIL, MEETING_CREATE_SUCCESS,
} from "../../../actions/types";

const initialState = {};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case MEETING_CREATE_SUCCESS:
            return {
                ...state,
            };
        case MEETING_CREATE_FAIL:
            return {
                ...state,
            };

        case GET_COMMISSION_SUCCESS:
            return {
                ...state,
                commission: [...payload],
            };


        default:
            return state;
    }
}
