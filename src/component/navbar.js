import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="header navbar light-theme navbar-light navbar-expand-lg bg-light sticky-top">
                <a className="navbar-brand">Doctor Scheduling</a>
            <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" aria-label="Toggle navigation" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            </div>
            <div className="navbar-collapse collapse" id="collapsibleNavbar">
                <div className="mr-auto nav-item nav">
                <a href="" className="text-center active nav-link">
                    <div className="header-button-active">Manage Student</div></a>
                <a href="" className="text-center active nav-link">
                    <div className="header-button-active">Manage Teacher</div></a>
                <a href="" className="text-center active nav-link">
                    <div className="header-button-active">Seat Status </div></a>
                </div>
                <br></br>
                
                {/* <ul className="navbar-nav">
                    <li className="nav-item">
                        <a type="button" className="btn btn-link" href="#">Manage Student</a>
                    </li>
                    <li className="nav-item">
                        <a type="button" className="btn btn-link" href="#">Manage Teacher</a>
                    </li>
                    <li className="nav-item">
                        <a type="button" className="btn btn-link" href="#">Manage Patient</a>
                    </li>
                </ul> */}
                <Link to="/">
                    <button type="button" className="btn btn-outline-danger">Logout</button>
                </Link>

            </div>
        </nav>
    );
}