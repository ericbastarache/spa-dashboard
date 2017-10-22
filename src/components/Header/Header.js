import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.headerText}</h1>
            <ul>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </ul>
        </div>
    )
}

export default Header;