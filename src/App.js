import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header headerText="Hello World"/>
        <LoginContainer />
        <Footer footerText="Lorem ipsum dolor amet" />
      </div>
    );
  }
}

export default App;
