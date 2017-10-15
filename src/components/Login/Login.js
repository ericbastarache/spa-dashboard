import React from 'react';

const Login = (props) => {
    return (
        <form>
            <input type="text" className="dashboard-input" value={props.username} />
            <input type="password" className="dashboard-input" value={props.password} />
        </form>
    )
}

export default Login;