import {
    UPDATE_FIRST_NAME,
    UPDATE_LAST_NAME,
    UPDATE_PATRONYMIC
} from "../../actions/types";


let initialState = {
    newFirstNameText: '',
    newLastNameText: '',
    newPatronymicText: '',
    newPhoneNumberText: '',
    newEmailAddressText: '',
    newPasswordText: '',
};

const signUpReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_FIRST_NAME:
            return {
                ...state,
                newFirstNameText: payload,
            }
        case UPDATE_LAST_NAME:
            return {
                ...state,
                newLastNameText: payload,
            }
        case UPDATE_PATRONYMIC:
            return {
                ...state,
                newPatronymicText: payload,
            }
        // case UPDATE_PHONE_NUMBER:
        //     return{
        //         ...state,
        //         newPhoneNumberText: action.phoneNumber,
        //     }
        // case UPDATE_EMAIL_ADDRESS:
        //     return{
        //         ...state,
        //         newEmailAddressText: action.emailAddress,
        //     }
        // case UPDATE_PASSWORD:
        //     return{
        //         ...state,
        //         newPasswordText: action.password,
        //     }

        default:
            return state;
    }
}

// Action creators
export const updateFirstName = (firstName) => ({type: UPDATE_FIRST_NAME, payload: firstName});
export const updateLastName = (lastName) => ({type: UPDATE_LAST_NAME, payload: lastName});
export const updatePatronymic = (patronymic) => ({type: UPDATE_PATRONYMIC, payload: patronymic});
// export const updatePhoneNumber = (phoneNumber) => ({type: UPDATE_PHONE_NUMBER, phoneNumber});
// export const updateEmailAddress = (emailAddress) =>({type: UPDATE_EMAIL_ADDRESS, emailAddress});
// export const updatePassword = (password) => ({type: UPDATE_PASSWORD, password});

export default signUpReducer;