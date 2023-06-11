import React from 'react';
import ugLogo from '../images/UGLogo.svg'
import '../styles/index.css'
import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
            <Link to="/" className="nav-link"><div className="navbar-brand mb-0 h1"><img src={ugLogo} alt="" width="70" height="34" className="d-inline-block align-text-top"/>
            UG Student Management system</div></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto h5">
                <li className="nav-item">
                    <Link to="/" className='nav-link'> Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className='nav-link'> Sign In </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className='nav-link'> Dashboard </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className='nav-link'> Profile </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className='nav-link'> About </Link>
                </li>
                </ul>
                <ul className="navbar-nav ms-auto h5">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Farouk
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li><Link to="/dashboard" className="dropdown-item">Dashboard</Link></li>
                    <li><Link to="/profile" className='dropdown-item'>Profile</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link to="/" className="dropdown-item">Logout</Link></li>
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
    );
};