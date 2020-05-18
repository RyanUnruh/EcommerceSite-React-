import React, { Component } from 'react'

import {auth, createUserProfileDocument} form '../../firebase/firebase.utils.js'

import './sign-up.styles.scss';

import CustomeButton from '../custom-button/custom-button.component';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      displayName:'',
    email: '', 
    password: '',
    confirmPassword: ''
  }
  
  }
  render() { 
    const = {displayName, email, password, confirmPassword} = this.state;
    return ( 
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit} className="sighn-up-form">
          <FormInput 
          type='email'
          name='email'
          value={email}
          onChange={this.handleChange}
          label='Desplay Name'
          required8
          />
          <FormInput 
          type='password'
          name='password'
          value={password}
          onChange={this.handleChange}
          label='Password'
          required
          />
          <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={this.handleChange}
          label='Confirm Password'
          required
          />
          <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          onChange={this.handleChange}
          label='Desplay Name'
          required
          />
        </form>
        <CustomeButton type='submit'>SIGN UP</CustomeButton>
      </div>
    );
  }
}
 
export default SignUp;