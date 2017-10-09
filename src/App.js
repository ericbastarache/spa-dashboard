import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header headerText="Hello World"/>
        <Footer footerText="Lorem ipsum dolor amet" />
      </div>
    );
  }
}

export default App;
