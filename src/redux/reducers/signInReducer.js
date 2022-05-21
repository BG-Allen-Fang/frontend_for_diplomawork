// import {
//     UPDATE_EMAIL_ADDRESS,
//     UPDATE_PASSWORD
// } from "../../actions/types";
//
//
// let initialState = {
//     email: '',
//     password: '',
// };
//
// const signInReducer = (state = initialState, action) => {
//     const { type, payload } = action;
//
//     switch (type) {
//
//         case UPDATE_EMAIL_ADDRESS:
//
//             return {
//                 ...state,
//                 email: payload,
//             }
//         case UPDATE_PASSWORD:
//             return {
//                 ...state,
//                 password: payload,
//             }
//         default:
//             return state;
//     }
// }
//
// // Action creators
// export const UpdateEmailAddress = (emailAddress) =>
//     ({type: UPDATE_EMAIL_ADDRESS, payload: emailAddress});
// export const UpdatePassword = (password) =>
//     ({type: UPDATE_PASSWORD, payload: password});
//
// export default signInReducer;