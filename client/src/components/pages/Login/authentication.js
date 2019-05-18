import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../App.css';
import './authentication.css';
import LoginPromoter from './loginPromoter';
import LoginUser from './loginUser';
import Register from './register';
import RegisterPromoter from './registerPromoter';
import Footer from '../../Footer/footer'
import Barre from '../../images/barre.png';

class Authentication extends Component {

  state = {
    email: "",
    password: "",
    currentComponent: "loginUser",
  }


  // function onclick log out
  logout = () => {
    this.setState({ waitingForServer: false })
  }

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  logingInPromoter = (event) => {
    event.preventDefault();
    this.setState({ currentComponent: "loginPromoter" });
  }

  logingInUser = (event) => {
    event.preventDefault();
    this.setState({ currentComponent: "loginUser" });
  }
  registerUser = (event) => {
    event.preventDefault();
    this.setState({ currentComponent: "registerUser" });
  }

  registerPromoter = (event) => {
    event.preventDefault();
    this.setState({ currentComponent: "registerPromoter" });
  }

  chatEmail = () => {
    this.props.chatEmail(this.state.email)
  }


  display = () => {
    if (this.state.currentComponent === "loginUser") {
      return <LoginUser registerUser={this.registerUser} onRegister={this.props.onRegister} />
    }
    else if (this.state.currentComponent === "loginPromoter") {
      return <LoginPromoter registerPromoter={this.registerPromoter} onRegister={this.props.onRegister} />
    }
    else if (this.state.currentComponent === "registerUser") {
      return <Register logingInUser={this.logingInUser} onRegister={this.props.onRegister} />
    }
    else if (this.state.currentComponent === "registerPromoter") {
      return <RegisterPromoter logingInPromoter={this.logingInPromoter} onRegister={this.props.onRegister} />
    }
  }


  render() {
    return (

      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-auth slideRight">
          <div className="container text-center">
            <h1 className="display-4">Register / Login</h1>
            <form className="form-inline">
              <div className="form-row">
                <button onClick={this.logingInPromoter} name="loginPromoter" type="button" className="btn-login">
                  Promoter <i className="fas fa-user-tie"></i>
                </button>
                <button onClick={this.logingInUser} type="button" className="btn-login">
                  User <i className="fas fa-users"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          {this.display()}
          <div className="barre">
            <img src={Barre} alt="Logo" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Authentication);
