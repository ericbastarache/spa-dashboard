import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import LoginContainer from './containers/LoginContainer';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Header headerText="Hello World"/>
          <Main />
        <Footer footerText="Lorem ipsum dolor amet" />
      </div>
      </Router>
    );
  }
}

export default App;
