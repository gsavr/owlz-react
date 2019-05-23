import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import logo from '../images/owl.png';
import './nav.css';


class Nav extends Component {

  state = {
    user: parseInt(localStorage.getItem("user")),
    promoter: parseInt(localStorage.getItem("promoter")),
    city: ""
  }

  renderRedirect = () => {
    this.props.history.push(`/listpromoter/${this.state.city}`)
  }

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    let dashboardPath = "";
    if (this.state.user) {
      dashboardPath = `/dashboard/${this.state.user}`
    } else {
      dashboardPath = `/dashboard/promoter/${this.state.promoter}`
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p className="navbar-brand">
          <Link onClick={this.props.onNavigation} to="/">
            <img className="brand-logo" src={logo} alt={"logo"} />
          </Link>
        </p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {this.props.loggedIn && <li className="nav-item">
              <Link onClick={this.props.onNavigation} to={dashboardPath} className="nav-link">
                Dashboard
            </Link>
            </li>}
            <li className="nav-item">
              <Link onClick={this.props.onNavigation} to="/about" className="nav-link">
                About us
            </Link>
            </li>
            <li className="nav-item">
              <Link onClick={this.props.onNavigation} to="/contact" className="nav-link">
                Contact us
            </Link>
            </li>
            {this.props.loggedIn && <li className="nav-item">
              <div class="searchbar">
                <input onChange={this.handleType} className="search_input" type="text" name="city" placeholder="Search city..."></input>
                <span onClick={this.renderRedirect} className="search_icon"><i className="fas fa-search"></i></span>
              </div>
            </li>}
          </ul>
          <span className="navbar-text ">
            {!this.props.loggedIn && <button className="btn-login" onClick={this.props.onLogin} >
              log in
            </button>}
            {this.props.loggedIn && <button onClick={this.props.onLogout} className="btn-login">
              log out
          </button>}
          </span>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);

