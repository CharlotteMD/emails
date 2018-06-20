import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <h3>Signature Preview:</h3>
        <p className="name">Name</p>
        <p className="role">Job Title</p>
        <p className="office" id="location">Office</p>
        <p className="office" id="email">Email</p>
        <p className="office" id="phone">Phone</p>

        <a src="https://www.abc.com/"><img src="./../../public/logo.png" alt="logo"/></a>

      </div>
    );
  }
}

export default Preview;
