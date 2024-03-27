import React from 'react';

function Footer() {
    return ( <
        footer className = "app-footer" >
        <
        div className = "footer-content" >
        <
        div className = "footer-column" >
        <
        h3 > About Us < /h3> <
        ul >
        <
        li > < a href = "#" > Our Story < /a></li >
        <
        li > < a href = "#" > Team < /a></li >
        <
        li > < a href = "#" > Careers < /a></li >
        <
        /ul> <
        /div> <
        div className = "footer-column" >
        <
        h3 > Adoption < /h3> <
        ul >
        <
        li > < a href = "#" > How to Adopt < /a></li >
        <
        li > < a href = "#" > Adoption Centers < /a></li >
        <
        li > < a href = "#" > FAQs < /a></li >
        <
        /ul> <
        /div> <
        div className = "footer-column" >
        <
        h3 > Contact Us < /h3> <
        p > 123 Pet Shelter Street < /p> <
        p > City, State, 12345 < /p> <
        p > Email: info @petshelter.com < /p> <
        p > Phone: +1(123) 456 - 7890 < /p> <
        /div> <
        /div> <
        div className = "footer-bottom" >
        <
        p > & copy; 2024 Pet Shelter.All Rights Reserved. < /p> <
        /div> <
        /footer>
    );
}

export default Footer;