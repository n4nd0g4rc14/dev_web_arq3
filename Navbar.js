import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import './index.css';


function Navbar () {
    return (
        <nav id="navbar">
            <img src={logo} className="hello" alt="Logo" />
            <div className="navbar-container">
                <ul className="navbar-items">
                    <li className="navbar-item">HOME</li>
                    <li className="navbar-item">INSCREVER-SE</li>
                    <li className="navbar-item">FAQ</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
