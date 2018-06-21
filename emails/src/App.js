import React, { Component } from 'react';
import './App.css';

// import BasicFormBody from './components/BasicFormBody';
// import Preview from './components/Preview';
import BasicForm from './components/BasicForm';

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
          <BasicForm />
          {/* <BasicFormBody/> */}
          {/* <Preview/> */}
        </section>

        <footer>
          <p>Having trouble? <a href="www.abc.com">Contact your regional IT Support</a></p>
        </footer>

      </div>
    );
  }
}

export default App;
