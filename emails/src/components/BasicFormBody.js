import React, { Component } from 'react';

class BasicFormBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      role: '',
      email: '',
      phone: '',
      mobile: ''
    };

    this.handleBasicChange = this.handleBasicChange.bind(this);
  }

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
        <form className="mainform">
          <h3>Who, what, and where</h3>

          <label className="mainlabel">
            Full Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleBasicChange}></input>
          </label>


          <label className="mainlabel">
            Role:
            <input
              type="text"
              name="role"
              value={this.state.role}
              onChange={this.handleBasicChange}>
            </input>
          </label>

          {/* <div className="radio">
            <label className="mainlabel">
              <h4>Office:</h4>
              <input type="radio" value="lon" name="office" onChange={this.handleBasicChange}/>
              <label>London, United Kingdom</label>

              <input type="radio" value="ny" name="office" onChange={this.handleBasicChange}/>
              <label>New York, NY</label>

              <input type="radio" value="ber" name="office" onChange={this.handleBasicChange}/>
              <label>Berlin, Germany</label>

              <input type="radio" value="tok" name="office" onChange={this.handleBasicChange}/>
              <label>Tokyo, Japan</label>
            </label>
          </div> */}



          <h3>How to contact you</h3>

          <label className="mainlabel">
            Email Address:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleBasicChange}>
            </input>
          </label>

          <label className="mainlabel">
            Telephone number (include dial code):
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleBasicChange}>
            </input>
          </label>

          <label className="mainlabel">
            Mobile number (include dial code):
            <input
              type="text"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handleBasicChange}>
            </input>
          </label>

          {/* <h3>Your support/assistant details</h3>

          <div className="radio">
            <label className="mainlabel">
              <h4>Please select one:</h4>
              <input type="radio" value="na" name="support" onChange={this.handleBasicChange}/>
              <label>Not applicable</label>

              <input type="radio" value="ea" name="support" onChange={this.handleBasicChange}/>
              <label>I support another team member(s)</label>

              <input type="radio" value="snr" name="support" onChange={this.handleBasicChange}/>
              <label>I have an assistant</label>
            </label>
          </div> */}

          <button>Next</button>

        </form>
      </div>
    );
  }
}

export default BasicFormBody;
