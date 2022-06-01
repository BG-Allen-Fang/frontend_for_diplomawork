import MeetingService from "../../services/commissionSide/meeting.service";
import {
    GET_COMMISSION_SUCCESS, MEETING_CREATE_FAIL, MEETING_CREATE_SUCCESS, SET_MESSAGE,
} from "../types";

export const meetingCreate = (formValues) => (dispatch) => {
    return MeetingService.meetingCreate(formValues).then(
        (response) => {
            dispatch({type: MEETING_CREATE_SUCCESS,});
            dispatch({type: SET_MESSAGE, payload: response.data.message,});
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({type: MEETING_CREATE_FAIL});
            dispatch({type: SET_MESSAGE, payload: message,});
            return Promise.reject();
        }
    );
};

export const getCommission = () => (dispatch) => {
    return MeetingService.getCommission().then(
        (response) => {
            dispatch({
                type: GET_COMMISSION_SUCCESS,
                payload: response.data,
            });
            return response.data;
        })
}