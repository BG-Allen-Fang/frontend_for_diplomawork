import * as React from 'react';
import './signin';
import StoreContext from "../../../StoreContext";
import SignIn from "./signin";
import {UpdateEmailAddress_ActionCreator} from "../../../redux/signInReducer";


const SignInContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const signInPage = store.getState().signInPage;

                const onEmailTextChange = (text) => {
                    store.dispatch(UpdateEmailAddress_ActionCreator(text));
                };
                return (
                    <SignIn
                        signInPage={signInPage}
                        onEmailTextChange={onEmailTextChange}
                    />
                )
            }}
        </StoreContext.Consumer>
    );
}

export default SignInContainer;