import * as React from 'react'
import "./profile.css"
import {createTheme} from "@mui/material";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {Component} from "react";

class Profile extends Component {

    render() {

        const {user} = this.props;

        if (!user) {
            return <Redirect to="/signin"/>;
        }
        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>{user.name}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Token:</strong> {user.jwtToken.substring(0, 20) + "... " + user.jwtToken.substr(user.jwtToken.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong> {user.id}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <strong>Authorities:</strong>
                <p>{user.role.roleName}</p>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user} = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Profile);