import * as React from 'react';
import "./SingUp.css";
import SignUp from "./signup";
import {connect} from "react-redux";


class SignUpContainer extends React.Component {

    render() {
        return <SignUp {...this.props} signUpPage={this.props.signUpPage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        signUpPage: state.signUpPage
    }
}

export default connect(mapStateToProps)(SignUpContainer);