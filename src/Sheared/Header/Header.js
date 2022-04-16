import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className='navigation'>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <img src={logo} alt="" />
                    <div className="menu_item">
                        <Link to='/home'>Home</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/about'>About Me</Link>
                        <Link className='text-decoration-underline' to='/login'>Log In</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;