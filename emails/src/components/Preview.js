import React from 'react';

const Preview = ( props ) => {
  const { name, role, email, phone, mobile } = props;
  return (
    <div className="preview">
      <h3>Signature Preview:</h3>
      <p className="name">{name}</p>
      <p className="role">{role}</p>
      <p className="office" id="location">Office</p>
      <p className="office" id="email">{email}</p>
      <p className="office" id="phone">{phone}</p>
      <p className="office" id="mobile">{mobile}</p>

      <a src="https://www.abc.com/"><img src="./../../public/logo.png" alt="logo"/></a>

    </div>
  );
};

export default Preview;
