import React, { Component } from 'react';
class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            
        );
    }
}

const mapStateToProps = () => {
    return {

    };
};

export default connect(mapStateToProps)(LoginContainer);