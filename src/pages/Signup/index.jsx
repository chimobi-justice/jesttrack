import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../styles/signup.scss';
import { textStyles, textColor } from "./styles.signup";
import signupImage from '../../images/company1.jpg'

import ValidateEmail from "../../Validation";

import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      errors: {
        invalidFullName: "",
        invalidEmail: "",
        invalidPassword: ""
      },
      isLoading: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this._handleSignup = this._handleSignup.bind(this);
  }

  _handleSignup(e) {
    e.preventDefault();
    const { fullname, email, password } = this.state;

    if (!fullname && !email && !password) {
      this.setState({
        errors: {
          invalidFullName: 'Required',
          invalidEmail: 'Required',
          invalidPassword: 'Required'
        }
      });
    }

    else if (fullname && !email && !password) {
      this.setState({
        errors: {
          invalidEmail: 'Required',
          invalidPassword: 'Required'
        }
      });
    }

    else if (email && !fullname && !password) {
      this.setState({
        errors: {
          invalidFullName: 'Required',
          invalidPassword: 'Required'
        }
      });
    }

    else if (password && !fullname && !email) {
      this.setState({
        errors: {
          invalidFullName: 'Required',
          invalidEmail: 'Required'
        }
      });
    }

    else if (!ValidateEmail(email) && fullname && !password) {
      this.setState({
        errors: {
          invalidPassword: 'Required',
        }
      });
    }

    else if (!ValidateEmail(email) && !fullname && password) {
      this.setState({
        errors: {
          invalidFullName: 'Required',
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

    else if (fullname && email && !password) {
      this.setState({
        errors: {
          invalidPassword: 'Required',
        }
      });
    }

    else if (fullname && !email && password) {
      this.setState({
        errors: {
          invalidEmail: 'Required',
        }
      });
    }

    else if (!fullname && email && password) {
      this.setState({
        errors: {
          invalidFullName: 'Required',
        }
      });
    }

    else if (fullname && email && password) {
      this.setState({
        isLoading: true,
        errors: {
          invalidFullName: '',
          invalidEmail: '',
          invalidPassword: ''
        }
      });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;

    if (name === 'fullname') {
      this.setState({
        fullname: value
      })
    }

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

    if (name === 'fullname' && value.length > 0) {
      this.setState({
        errors: {
          ...this.state.errors,
          invalidFullName: ''
        }
      });
    }

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

  componentDidMount() {
    this.__fullNameInput.focus();
  }

  render() {
    let self = this;

    return (
      <div className="signup">
        <div className="signup-wrapper-box">
          <div>
            <img src={signupImage} alt="" />
          </div>
          <div>
            <form onSubmit={this._handleSignup}>
              <h2 style={textStyles.emphasis}>Sign Up<span style={textColor}>*</span></h2>

              <div>
                <label>Full Name</label>
                <Input
                  type="text"
                  placeholder="Enter Fullname"
                  name="fullname"
                  onChange={this.handleChange}
                  onKeyUp={this.handleTextChange}
                  prefix={<UserOutlined />}
                  ref={
                    (el) => self.__fullNameInput = el
                  } />
                <span style={textStyles.small}>{this.state.errors.invalidFullName}</span>
              </div>

              <div>
                <label>Email</label>
                <Input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  onChange={this.handleChange}
                  onKeyUp={this.handleTextChange}
                  prefix={<UserOutlined />}
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
                  prefix={<UserOutlined />}
                  ref={
                    (el) => self.__passwordElement = el
                  }
                />
                <span style={textStyles.small}>{this.state.errors.invalidPassword}</span>
              </div>

              <div>
                <Button type="primary" htmlType="submit" loading={this.state.isLoading}>Sign up</Button>
              </div>

              <p>Already have an account <Link to="/login" style={textColor}>log in</Link></p>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;