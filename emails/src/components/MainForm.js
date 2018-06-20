import React, { Component } from 'react';

class MainForm extends Component {
  render() {
    return (
      <div>
        <form>
          <h3>Who, what, and where</h3>

          <label className="mainlabel">
            Full Name:
            <input type="text"></input>
          </label>

          <label className="mainlabel">
            Role:
            <input type="text"></input>
          </label>

          <label className="mainlabel">
            Office:
            <input type="radio" value="lon"/>
            <label>London</label>

            <input type="radio" value="ny"/>
            <label>New York</label>

            <input type="radio" value="sh"/>
            <label>Shanghai</label>

            <input type="radio" value="tok"/>
            <label>Tokyo</label>
          </label>

          <h3>How to contact you</h3>

          <label className="mainlabel">
            Email Address:
            <input type="text"></input>
          </label>

          <label className="mainlabel">
            Telephone number (include dial code):
            <input type="text"></input>
          </label>

          <label className="mainlabel">
            Mobile number (include dial code):
            <input type="text"></input>
          </label>

          <h3>Your support/assistant details</h3>

          <label className="mainlabel">
            Please select one:
            <input type="radio" value="na"/>
            <label>Not applicable</label>

            <input type="radio" value="ea"/>
            <label>I support another team member(s)</label>

            <input type="radio" value="snr"/>
            <label>I have an assistant</label>
          </label>

          <button>Next</button>

        </form>
      </div>
    );
  }
}

export default MainForm;
