import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import LoginContainer from '../../containers/LoginContainer';

const Main = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/login" component={LoginContainer} />
            </Switch>
        </div>
    );
}

export default Main;