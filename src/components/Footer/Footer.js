import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <p>{props.footerText}</p>
            </div>
        </footer>
    );
}

export default Footer;