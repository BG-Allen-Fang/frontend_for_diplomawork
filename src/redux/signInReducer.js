const UPDATE_EMAIL_ADDRESS = "UPDATE_EMAIL_ADDRESS";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

let initialState = {
    newEmailAddressText: '',
    newPasswordText: '',
};

const signInReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_EMAIL_ADDRESS:
            state.newEmailAddressText = action.newText;
            return state;
        // case UPDATE_PASSWORD:

        default:
            return state;
    }
}

// Action creators
export const UpdateEmailAddress_ActionCreator = (text) =>
    ({type: UPDATE_EMAIL_ADDRESS, newText: text});

export default signInReducer;