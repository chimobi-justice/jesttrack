import React, { Component } from "react";
import '../../../../styles/navbar.scss';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

class NavBar extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="navbar">
                        <h1 className="nav-logo">
                            Jesttract
                        </h1>

                        <ul>
                            <li className="listItem"><NavLink to="/">Home</NavLink></li>
                            <li className="listItem"><NavLink to="/">life at our company</NavLink></li>
                            <li className="listItem"><NavLink to="/">About</NavLink></li>
                            <li className="listItem"><NavLink to="/">Services</NavLink></li>    
                        </ul>    

                        <ul>
                            <li>
                                <Button type="link" className="btnDefault">Register</Button>
                            </li>
                            <li>
                                <Button type="primary">Sign In</Button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </>
        );
    }
}

export default NavBar;