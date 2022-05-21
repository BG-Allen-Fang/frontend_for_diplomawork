import React, {Component} from "react";
import Input from "react-validation/build/input";

import {connect} from "react-redux";
import {userChangePass} from "../../../actions/auth";
import Form from "react-validation/build/form";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


const vpassword = (value) => {
    if (value.length < 8 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 8 and 40 characters.
            </div>
        );
    }
};

class ChangePass extends Component {
    constructor(props) {
        super(props);

        this.onChangePassword = this.onChangePassword.bind(this);
        this.userChangePass = this.userChangePass.bind(this);

        this.state = {
            password: "",
            passwordSuccessful: false,
        };
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    userChangePass(e) {
        e.preventDefault();
        debugger

        this.props
            .dispatch(
                userChangePass(
                    this.state.password,
                )
            )
    }

    render() {
        const {message} = this.props;

        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <Form>
                        <img
                            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                            alt="profile-img"
                            className="profile-img-card"
                        />
                            <div>
                                <div>
                                    <p>Plese write your password here:</p>
                                    <label htmlFor="password">Password:</label>
                                    <Input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required, vpassword]}
                                    />
                                </div>
                                <div>
                                    <button onClick={this.userChangePass} className="btn btn-primary btn-block">Send</button>
                                </div>
                            </div>

                        {message && (
                            <div className="form-group">
                                <div className={this.state.passwordSuccessful ? "alert alert-success" : "alert alert-danger"}
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

export default connect(mapStateToProps)(ChangePass);
