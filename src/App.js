import * as React from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignIn from "./components/SignIn/signin";
import SignUp from "./components/SignUp/signup";
import Vacancy from "./components/Vacancy/vacancy";
import Home from "./components/Home/home";
import FooterCustom from "./components/Footer/FooterCustom";
import AppbarCustom from "./components/appbar_custom/AppbarCustom";
import Profile from "./components/Profile/profile";
import AppbarProfile from "./components/appbar_profile/AppbarProfile";
import Status from "./components/Status/status";

const App = (props) => {
    return (
        <Router>
            <AppbarProfile/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/status" element={<Status/>}/>
                <Route path="/signin" element={<SignIn signInPage={props.state.signInPage} dispatch={props.dispatch} />}/>
                <Route path="/signup" element={<SignUp signUpPage={props.state.signUpPage} dispatch={props.dispatch} />}/>
                <Route path="/vacancy" element={<Vacancy vacancyPage={props.state.vacancyPage} />}/>
            </Routes>
            <FooterCustom/>
        </Router>
    );
}

export default App;

