import React from 'react';

const BasicFormBody = (props) => {
  const { name, role, email, phone, mobile, handleBasicChange } = props;
  return (
    <div>
      <form className="mainform">
        <h3>Who, what, and where</h3>

        <label className="mainlabel">
          Full Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleBasicChange}></input>
        </label>


        <label className="mainlabel">
          Role:
          <input
            type="text"
            name="role"
            value={role}
            onChange={handleBasicChange}>
          </input>
        </label>

        {/* <div className="radio">
          <label className="mainlabel">
            <h4>Office:</h4>
            <input type="radio" value="lon" name="office" onChange={handleBasicChange}/>
            <label>London, United Kingdom</label>

            <input type="radio" value="ny" name="office" onChange={handleBasicChange}/>
            <label>New York, NY</label>

            <input type="radio" value="ber" name="office" onChange={handleBasicChange}/>
            <label>Berlin, Germany</label>

            <input type="radio" value="tok" name="office" onChange={handleBasicChange}/>
            <label>Tokyo, Japan</label>
          </label>
        </div> */}



        <h3>How to contact you</h3>

        <label className="mainlabel">
          Email Address:
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleBasicChange}>
          </input>
        </label>

        <label className="mainlabel">
          Telephone number (include dial code):
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={handleBasicChange}>
          </input>
        </label>

        <label className="mainlabel">
          Mobile number (include dial code):
          <input
            type="text"
            name="mobile"
            value={mobile}
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
};

export default BasicFormBody;
