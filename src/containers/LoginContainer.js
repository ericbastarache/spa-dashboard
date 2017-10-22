import React, { Component } from 'react';
import { connect } from 'react-redux';
class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        
        //send data to server and store user in state
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="username" onChange={this.handleChange} type="text" className="dashboard-control" />
                <input name="password" onChange={this.handleChange} type="password" className="dashboard-control" />
                <button type="submit" className="dashboard-button">Login</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password
    };
};

export default connect(mapStateToProps)(LoginContainer);