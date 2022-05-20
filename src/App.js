import * as React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/pages/Userside/Home/home";
import FooterCustom from "./components/Elements/Footer/FooterCustom";
import AppbarCustom from "./components/Elements/appbar_custom/AppbarCustom";
import Profile from "./components/pages/Userside/Profile/profile";
import AppbarProfile from "./components/Elements/appbar_profile/AppbarProfile";
import Status from "./components/pages/Userside/Status/status";
import SignInContainer from "./components/pages/Userside/SignIn/signInContainer";
import SignUpContainer from "./components/pages/Userside/SignUp/signUpContainer";
import VacancyContainer from "./components/pages/Userside/Vacancy/vacancyContainer";
import Request from "./components/pages/Commissionside/request/request";
import Dashboard from "./components/pages/Commissionside/Dashboard/dashboard";
import Poll from "./components/pages/Commissionside/Createpoll/createpoll";
import Meeting from "./components/pages/Commissionside/Meeting/meeting";


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
                <Route path="/request" element={<Request />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/teams" element={<Meeting />}/>
                <Route path="/poll" element={<Poll />}/>
            </Routes>
            <FooterCustom/>
        </Router>
    );
}

export default App;

