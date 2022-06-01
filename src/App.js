import * as React from 'react';
import {Router, Switch, Route} from "react-router-dom"
import Home from "./components/userSide/Home/home";
import FooterCustom from "./components/elements/Footer/FooterCustom";

import Status from "./components/userSide/Status/status";
import SignInContainer from "./components/userSide/SignIn/signInContainer";
import SignUpContainer from "./components/userSide/SignUp/signUpContainer";
import VacancyContainer from "./components/userSide/Vacancy/VacancyContainer";
import AppbarContainer from "./components/elements/appbar_custom/AppbarContainer";
import {Component} from "react";
import EventBus from "./common/EventBus";
import {clearMessage} from "./actions/userSide/message";
import {history} from "./helpers/history";
import {connect} from "react-redux";

import Profile from "./components/userSide/profile/profile";
import ForgotPass from "./components/userSide/SignIn/forgotPass.component";
import Request from "./components/commissionSide/request/request";
import Dashboard from "./components/commissionSide/Dashboard/dashboard";
import Meeting from "./components/commissionSide/Meeting/meeting";
import Poll from "./components/commissionSide/Createpoll/createpoll";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: undefined,
        };

        history.listen(() => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }

    componentDidMount() {
        const user = this.props.user;

        if (user) {
            this.setState({
                user: user
            });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });
    }

    render() {

        return (
            <Router history={history}>
                <AppbarContainer/>
                <Switch>
                    <Route exact path="/"
                           render={() => <Home/>}/>
                    <Route path="/profile"
                           render={() => <Profile/>}/>
                    <Route path="/status/:statusId?"
                           render={() => <Status/>}/>
                    <Route path="/signin"
                           render={() => <SignInContainer/>}/>
                    <Route path="/signup"
                           render={() => <SignUpContainer/>}/>
                    <Route path="/vacancy"
                           render={() => <VacancyContainer/>}/>
                    <Route path="/forgotPass"
                           render={() => <ForgotPass/>}/>
                    <Route path="/request"
                           render={() => <Request />}/>
                    <Route path="/dashboard"
                           render={() => <Dashboard />}/>
                    <Route path="/teams"
                           render={() => <Meeting />}/>
                    <Route path="/poll"
                           render={() => <Poll />}/>
                </Switch>
                <FooterCustom/>
            </Router>

        );
    }
}

function mapStateToProps(state) {
    const {user} = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(App);

