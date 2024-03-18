import React from 'react';
import './App.css';
import logo from './images/logo.png';
import menuIcon from './images/menu-bar.png';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';

function App() {
    const history = useHistory();

    return ( <
        Router >
        <
        div className = "app" >
        <
        header className = "app-header" >
        <
        div className = "top-section" >
        <
        p className = "top-message" > Become a member of the community today
        for free! < /p> <
        button className = "get-started-button"
        onClick = {
            () => history.push('/signup') } >
        Get Started!
        <
        /button> <
        /div>

        <
        div className = "logo" >
        <
        img src = { logo }
        alt = "Logo"
        width = { 100 }
        height = { 100 }
        /> <
        /div>

        <
        div className = "bottom-section" >
        <
        h1 > PET SHELTER < /h1> <
        div className = "right-buttons" >
        <
        img src = { menuIcon }
        alt = "Menu"
        className = "menu-icon"
        onClick = {
            () => console.log("Menu clicked") }
        /> <
        button className = "sign-up-button"
        onClick = {
            () => history.push('/signup') } > Sign Up < /button> <
        button className = "login-button"
        onClick = {
            () => history.push('/login') } > Login < /button> <
        /div> <
        /div> <
        /header> <
        /div>

        <
        Switch >
        <
        Route path = "/signup"
        component = { SignupPage }
        /> <
        Route path = "/login"
        component = { LoginPage }
        /> <
        /Switch> <
        /Router>
    );
}

export default App;