import React from 'react';

import BasicFormBody from './BasicFormBody';
import Preview from './Preview';

class BasicForm extends React.Component {

  state = {
    name: '',
    role: '',
    email: '',
    phone: '',
    mobile: ''
  };

  handleBasicChange = (e) => {
    // this.setState({[e.target.name]: e.target.value});
    const target = e.target;
    const name = e.target.name;
    this.setState(() => {
      return {
        [name]: target.value
      };
    });
    console.log(e.target.value);
  }


  render() {
    return (
      <div>
        <BasicFormBody
          {...this.state}
          handleBasicChange={this.handleBasicChange}
        />

        <Preview
          {...this.state}
        />
      </div>
    );
  }
}

export default BasicForm;
