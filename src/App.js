import * as React from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SignIn from "./signin";
import SignUp from "./signup";
import Home from "./home";


function App(){
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

