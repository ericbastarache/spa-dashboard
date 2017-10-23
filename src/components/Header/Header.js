import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Header extends Component {
    constructor(props) {
        super(props);
        console.log('headerProps', props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.headerText}</h1>
                <ul>
                    <Link to="/">Home</Link>    
                    <Link to="/about">About</Link>
                    <Link to="/login">Login</Link>  
                    <li>{this.props.user}</li>
                </ul>
            </div>
        )
    }
}

export default connect()(Header);