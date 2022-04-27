import * as React from 'react';
import "./SingUp.css";
import {updateFirstName_ActionCreator} from "../../../redux/signUpReducer";
import SignUp from "./signup";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        signUpPage: state.signUpPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onFirstNameTextChange: (text) => {
            dispatch(updateFirstName_ActionCreator(text));
        },
    }
}

const SignUpContainer = connect(mapStateToProps,mapDispatchToProps)(SignUp)

export default SignUpContainer;