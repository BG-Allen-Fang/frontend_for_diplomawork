import React, {Component} from "react";
import Input from "react-validation/build/input";
import {isEmail} from "validator";

import {connect} from "react-redux";
import {pin_code, userForgotPass} from "../../../actions/auth";
import Form from "react-validation/build/form";
import {Redirect} from "react-router-dom";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};


const vPin_code = (value) => {
    if (value.length < 4 || value.length > 4) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be 4 characters.
            </div>
        );
    }
};

class ForgotPass extends Component {
    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePin_code = this.onChangePin_code.bind(this);
        this.userForgotPass = this.userForgotPass.bind(this);
        this.createPinCode = this.createPinCode.bind(this);


        this.state = {
            email: "",
            pin_code: "",
            emailSuccessful: false,
            pinSuccessful: false,
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }


    onChangePin_code(e) {
        this.setState({
            pin_code: e.target.value,
        });
    }


    createPinCode(e) {
        e.preventDefault();

        this.props
            .dispatch(
                pin_code(this.state.email)
            ).then(() => {
                this.setState({
                    emailSuccessful: true,
                });
            }
        )
    }

    userForgotPass(e) {
        e.preventDefault();

        this.props
            .dispatch(
                userForgotPass(
                    this.state.email,
                    this.state.pin_code,
                )
            ).then(() => {
                this.setState({
                    pinSuccessful: true
                });
            }
        )
    }


    render() {
        const {message} = this.props;

        if (this.state.pinSuccessful) {
            return <Redirect to="/signin"/>;
        }

        return (

            <div className="col-md-12">
                <div className="card card-container">
                    <Form>
                        <img
                            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                            alt="profile-img"
                            className="profile-img-card"
                        />
                        {!this.state.emailSuccessful && (
                            <div>
                                <div>
                                    <p>We send pin code to you're email.
                                        Plese write your email here:</p>
                                    <label htmlFor="email">Email:</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        validations={[required, email]}
                                    />
                                </div>
                                <div>
                                    <button onClick={this.createPinCode} className="btn btn-primary btn-block">Send
                                    </button>
                                </div>
                            </div>

                        )}
                        {this.state.emailSuccessful && (
                            <div>
                                <div>
                                    <p>We send pin code to you're email.
                                        Plese write your pin code here:</p>
                                    <label htmlFor="pin_code">Pin Code:</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        name="pin_code"
                                        value={this.state.pin_code}
                                        onChange={this.onChangePin_code}
                                        validations={[required, vPin_code]}
                                    />
                                </div>
                                <div>
                                    <button onClick={this.userForgotPass} className="btn btn-primary btn-block">Send
                                    </button>
                                </div>
                            </div>

                        )}

                        {message && (
                            <div className="form-group">
                                <div
                                    className={this.state.emailSuccessful ? "alert alert-success" : "alert alert-danger"}
                                    role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {message} = state.message;
    return {
        message,
    };
}

export default connect(mapStateToProps)(ForgotPass);
