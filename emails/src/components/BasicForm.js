// import React, { Component } from 'react';
//
// import BasicFormBody from './BasicFormBody';
//
// class BasicForm extends Component {
//
//   state = {
//     form: {
//       name: '',
//       role: '',
//       email: '',
//       phone: '',
//       mobile: ''
//     }
//   };
//
//   handleBasicChange = ({ target: { name, value }}) => {
//     const form = Object.assign({}, this.state.form, { [name]: value });
//     this.setState({ form });
//     console.log('form info: ', form);
//   }
//
//   render() {
//     return (
//       <div>
//         <BasicFormBody
//           handleBasicChange={this.handleBasicChange}
//         />
//       </div>
//     );
//   }
// }
//
// export default BasicForm;
