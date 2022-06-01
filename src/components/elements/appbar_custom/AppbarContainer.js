import React from 'react';
import AppbarCustom from "./AppbarCustom";
import {connect} from "react-redux";
import EventBus from "../../../common/EventBus";
import {logout} from "../../../actions/userSide/auth";
import {history} from "../../../helpers/history";
import {clearMessage} from "../../../actions/userSide/message";

class AppbarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        history.listen(() => {
            props.dispatch(clearMessage()); // clear message when changing location
        });
    }

    componentDidMount() {
        EventBus.on("logout", () => {
            this.logOut();
        });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logOut() {
        this.props.dispatch(logout());
        this.setState({
            user: undefined,
        });
    }

    render() {
        return <AppbarCustom {...this.props} logOut={this.logOut} />
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
});

export default connect(mapStateToProps,)(AppbarContainer);

