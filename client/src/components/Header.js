import React from 'react';
import navbar from '../sass/navbar.css';
import logo from '../images/logo.png';

const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top" id="header-nav">
                <div className="container-fluid">
                <img id="logo" src={logo} alt="logo"  />
                <a className="navbar-brand" id="nav-title" href="/">News Flow</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#header-nav-links" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse justify-content-end" id="header-nav-links">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/SignUp">SignUp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ProfilePage">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">sign out</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </header >
    )
}

Header.defaultProps = {
    title: 'News Flow',
}

export default Header



