import React, { Component } from 'react';

import BasicFormBody from './BasicFormBody';

class BasicForm extends Component {
  render() {
    return (
      <div>
        <BasicFormBody
          handleBasicChange={this.handleBasicChange}
          handleBasicSubmit={this.handleBasicSubmit}
        />
      </div>
    );
  }
}

export default BasicForm;
