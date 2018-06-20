import React, { Component } from 'react';
import './App.css';

import MainForm from './components/MainForm';
import Preview from './components/Preview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Signature Creator</h1>
        </header>

        <section className="intro">
          <h2>Welcome to Signature Creator</h2>
          <h3>Please fill out the following details to create your email signature, once you have filled out the form you will be able to preview and apply to your email account.</h3>
        </section>

        <section className="mainbody">
          <MainForm/>
          <Preview/>
        </section>

      </div>
    );
  }
}

export default App;
