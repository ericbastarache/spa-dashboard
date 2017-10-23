import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
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
        e.preventDefault();
        this.props.dispatch(fetchUser(this.state.username, this.state.password));
        // e.preventDefault();
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

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => {
            dispatch(fetchUser(this.state.username, this.state.password))
        }
    }
}


export default connect(mapStateToProps)(LoginContainer);