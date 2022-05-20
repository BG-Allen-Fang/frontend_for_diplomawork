import * as React from 'react';
import './signin';
import SignIn from "./signin";
import {UpdateEmailAddress_ActionCreator} from "../../../../redux/signInReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        signInPage: state.signInPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onEmailTextChange: (text) => {
            dispatch(UpdateEmailAddress_ActionCreator(text));
        },
    }
}

const SignInContainer = connect(mapStateToProps,mapDispatchToProps)(SignIn)

export default SignInContainer;