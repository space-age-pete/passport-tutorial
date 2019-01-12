import React, { Component } from "react";

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleFormSubmit(event) {
    console.log(this.state);
  }

  render() {
    return (
      <div className="SignupForm">
        <h1>Signup Form</h1>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <hr />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <hr />
        <button onClick={this.handleFormSubmit}>Sign up</button>
      </div>
    );
  }
}

export default SignUpForm;
