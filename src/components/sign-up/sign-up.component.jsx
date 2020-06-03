import React, { Component } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

import CustomeButton from "../custom-button/custom-button.component";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const { displayName, email, password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }

      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user, { displayName });
        this.setState({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error(error);
      }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit} className="sighn-up-form">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={this.handleChange}
          label="Desplay Name"
          required
        />
      </form>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
        <CustomeButton type="submit">SIGN UP</CustomeButton>
      </div>
    );
  }
}

export default SignUp;
