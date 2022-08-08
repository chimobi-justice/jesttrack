import React, { Component } from "react";
import '../../styles/login.scss';
import { textStyles, textColor } from "./styles.login";
import loginImage from '../../images/company2.jpg'

import ValidateEmail from "../../Validation";

import { Input, Button } from 'antd';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {
        invalidEmail: "",
        invalidPassword: ""
      },
      isLoading: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
  }

  _handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email && !password) {
      this.setState({
        errors: {
          invalidEmail: 'Required',
          invalidPassword: 'Required'
        }
      });
    }

    else if (!email) {
      this.setState({
        errors: {
          invalidEmail: 'Required'
        }
      });
    } 

    else if (!password) {
      this.setState({
        errors: {
          invalidPassword: 'Required'
        }
      });
    } 
    
    else if (email.length > 0 && !ValidateEmail(email)) {
      this.setState({
        errors: {
          invalidEmail: 'Invalid Email Address'
        }
      });
    }

    else if (ValidateEmail(email) && password) {
      this.setState({
        isLoading: true,
        errors: {
          invalidEmail: '',
          invalidPassword: ''
        }
      });
    }

  }

  handleChange(e) {
    const { name, value } = e.target;

    if (name === 'email') {
      this.setState({
        email: value
      })
    }

    if (name === 'password') {
      this.setState({
        password: value
      });
    }
  }

  handleTextChange(e) {
    const { name, value } = e.target;

    if (name === 'email' && value.length > 0) {
      this.setState({
        errors: {
          ...this.state.errors,
          invalidEmail: '',
        }
      });
    }

    if (name === 'password' && value.length > 0) {
      this.setState({
        errors: {
          ...this.state.errors,
          invalidPassword: '',
        }
      });
    }

    if (name === 'email' && !ValidateEmail(value)) {
      this.setState({
        errors: {
          invalidEmail: 'Invalid Email Address'
        }
      });
    }
  }

  render() {
    let self = this;

    return (
      <div className="login">
        <div className="login-wrapper-box">
          <div>
            <img src={loginImage} alt="" />
          </div>
          <div>
            <form onSubmit={this._handleLogin}>
              <h2 style={textStyles.emphasis}>Login<span style={textColor}>*</span></h2>

              <div>
                <label>Email</label>
                <Input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={this.handleChange}
                  onKeyUp={this.handleTextChange}
                  ref={
                    (el) => self.__emailInput = el
                  } />
                <span style={textStyles.small}>{this.state.errors.invalidEmail}</span>
              </div>

              <div>
                <label>Password</label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.handleChange}
                  onKeyUp={this.handleTextChange}
                  ref={
                    (el) => self.__passwordElement = el
                  }
                />
                <span style={textStyles.small}>{this.state.errors.invalidPassword}</span>
              </div>

              <div>
                <Button type="primary" htmlType="submit" loading={this.state.isLoading}>Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;