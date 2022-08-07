import React, { Component } from "react";
import '../../styles/navbar.scss';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

class NavBar extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar">
            <h1 className="nav-logo">
              Jesttrack
            </h1>

            <ul>
              <li className="listItem"><Link to="/">Home</Link></li>
              <li className="listItem"><Link to="#company">life at our company</Link></li>
              <li className="listItem"><Link to="#about">About</Link></li>
              <li className="listItem"><Link to="#service">Services</Link></li>
            </ul>

            <ul>
              <li>
                <Link to="/register"><Button type="link" className="btnDefault">Register</Button></Link>
              </li>
              <li>
                <Link to="/login"><Button type="primary">Sign In</Button></Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default NavBar;