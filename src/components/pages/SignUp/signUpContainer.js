import * as React from 'react';
import "./SingUp.css";
import {updateFirstName_ActionCreator} from "../../../redux/signUpReducer";
import SignUp from "./signup";
import StoreContext from "../../../StoreContext";

const SignUpContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                const signUpPage = store.getState().signUpPage;

                const onFirstNameTextChange = (text) => {
                    store.dispatch(updateFirstName_ActionCreator(text));
                };
                return (
                    <SignUp
                        onFirstNameTextChange={onFirstNameTextChange}
                        signUpPage={signUpPage}
                    />
                )
            }}
        </StoreContext.Consumer>
    );
}

export default SignUpContainer;