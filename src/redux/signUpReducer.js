const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
const UPDATE_PATRONYMIC = "UPDATE_PATRONYMIC";
const UPDATE_PHONE_NUMBER = "UPDATE_PHONE_NUMBER";
const UPDATE_EMAIL_ADDRESS = "UPDATE_EMAIL_ADDRESS";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

let initialState = {
    newFirstNameText: '',
    newLastNameText: '',
    newPatronymicText: '',
    newPhoneNumberText: '',
    newEmailAddressText: '',
    newPasswordText: '',
};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIRST_NAME:
            state.newFirstNameText = action.newText;
            return state;
        // case UPDATE_LAST_NAME:
        // case UPDATE_PATRONYMIC:
        // case UPDATE_PHONE_NUMBER:
        // case UPDATE_EMAIL_ADDRESS:
        // case UPDATE_PASSWORD:

        default:
            return state;
    }
}

// Action creators
export const updateFirstName_ActionCreator = (text) =>
    ({type: UPDATE_FIRST_NAME, newText: text});

export default signUpReducer;