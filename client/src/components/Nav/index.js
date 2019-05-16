import React, { Component } from "react";
import { Link } from "react-router-dom";
//import ChatApp from '../ChatApp/ChatApp'
import logo from '../images/owl.png';
import './nav.css';


class Nav extends Component {
  render(){ 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand">
        <Link onClick={this.props.onNavigation} to="/" className={window.location.pathname === "/"}>
        <img className="brand-logo" src={logo} alt={"logo"}/> 
        </Link>
      </p>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link onClick={this.props.onNavigation} to="/about" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
              About us 
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={this.props.onNavigation} to="/contact" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
              Contact us
            </Link>
          </li>
        </ul>
        <span className="navbar-text ">
          {!this.props.loggedIn&&<button className="btn-login" onClick={this.props.onLogin} >
            log in
            </button>}
          {this.props.loggedIn&&<button onClick={this.props.onLogout} className="btn-login">
             log out
          </button>}
        </span>
      </div>{/* <ChatApp /> */}
    </nav>
  );
}
}

export default Nav;

