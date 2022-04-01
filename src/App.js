import * as React from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SignIn from "./components/SignIn/signin";
import SignUp from "./components/SignUp/signup";
import Home from "./components/Home/home";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
            </Routes>
        </Router>
    );
}

export default App;

