import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png' 

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <Link to="/" className={window.location.pathname === "/"}>
        <img className="brand-logo" src={logo} alt={"logo"}/> 
        </Link>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/about" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
              About us 
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
              Contact us
            </Link>
          </li>
        </ul>
        <span className="navbar-text">
        <Link to="/login" className={window.location.pathname === "/login"}>
          Connection
        </Link>
        </span>
      </div>
    </nav>
  );
}

export default Nav;