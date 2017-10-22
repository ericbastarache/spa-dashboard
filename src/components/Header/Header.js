import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.headerText}</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </ul>
        </div>
    )
}

export default Header;