import React from 'react';
import '../sass/navbar.css';
import logo from '../images/logo.png';
import { useIsAuthenticated, useLogout } from '../utils/auth';


const Header = () => {

    let isAuth = useIsAuthenticated();
    (isAuth === undefined) ? isAuth = false : isAuth = true
    // let isAuth = true;

    const logout = useLogout();

    console.log("header.js, IsAuth: ", isAuth);

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top" id="header-nav">
                <div className="container-fluid">

                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img id="logo" src={logo} alt="logo" />
                        <span id="nav-title" className="ml-2">News Flow</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#header-nav-links" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="header-nav-links">
                        <ul className="navbar-nav">
                            
                            {!isAuth && <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/signup">Sign up</a>
                            </li>}
                            
                            {!isAuth && <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/login">Login</a>
                            </li>}
                            

                            {isAuth && <li className="nav-item">
                                <a className="nav-link" href="/profile">profile</a>
                            </li>}
                            

                            {isAuth && <li className="nav-item">
                                <a onClick={logout} className="nav-link" href="/">logout</a>
                            </li>}
                            
                        </ul>
                    </div>

                </div>
            </nav>
        </header >
    )
}

export default Header



