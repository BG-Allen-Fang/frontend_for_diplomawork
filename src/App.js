import * as React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/pages/Home/home";
import FooterCustom from "./components/Elements/Footer/FooterCustom";
import AppbarCustom from "./components/Elements/appbar_custom/AppbarCustom";
import Profile from "./components/pages/Profile/profile";
import AppbarProfile from "./components/Elements/appbar_profile/AppbarProfile";
import Status from "./components/pages/Status/status";
import SignInContainer from "./components/pages/SignIn/signInContainer";
import SignUpContainer from "./components/pages/SignUp/signUpContainer";
import VacancyContainer from "./components/pages/Vacancy/vacancyContainer";

const App = () => {
    return (
        <Router>
            <AppbarCustom/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/status" element={<Status/>}/>
                <Route path="/signin" element={<SignInContainer />}/>
                <Route path="/signup" element={<SignUpContainer />}/>
                <Route path="/vacancy" element={<VacancyContainer />}/>
            </Routes>
            <FooterCustom/>
        </Router>
    );
}

export default App;

