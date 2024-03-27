import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function Header() {

    const redirectToSignup = () => {
        console.log('Redirecting to signup page...');
    };

    return ( <
        header className = "app-header" > { /* Top Row */ } <
        div className = "top-row" >
        <
        p className = "top-message" > Become a member of the community today
        for free! < /p> <
        button className = "get-started-button"
        onClick = { redirectToSignup } >
        Get Started!
        <
        /button> <
        /div>

        { /* Logo and Menu for Desktop */ } <
        div className = "desktop-menu" >
        <
        div className = "logo-section" >
        <
        img src = { logo }
        alt = "Logo"
        className = "logo" / >
        <
        /div> <
        div className = "menu-section" >
        <
        Link to = "/about-us" > About Us < /Link> <
        Link to = "/pets" > Pets < /Link> <
        Link to = "/contact" > Contact < /Link> <
        Link to = "/services" > Services < /Link> <
        /div> <
        div className = "right-buttons" >
        <
        button className = "sign-up-button" > Sign Up < /button> <
        button className = "login-button" > Login < /button> <
        /div> <
        /div> <
        /header>
    );
}

export default Header;