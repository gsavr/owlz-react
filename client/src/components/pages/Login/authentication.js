import React, { Component } from 'react';
import { withRouter, Link, Route, Router, Switch } from 'react-router-dom';
import logo from '../../../logo.svg';
import '../../../App.css';
import API from "../../../Utils/API"
import LoginPromoter from './loginPromoter';
import LoginUser from './loginUser';
import Register from './register';
import RegisterPromoter from './registerPromoter';

class Authentication extends Component {

  state = {
    email: "",
    password: "",
    loggedInUser: false,
    loggedInPromoter: false,
    logingInUser: true,
    logingInPromoter: false
    
  }


  // function onclick log out
  logout=()=>{
    this.setState({waitingForServer:false})
  }

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (

      <div>
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Owlz</h2>
        </div>
  
        <div className="container">

        <LoginPromoter/>
        <LoginUser  onRegister={this.onRegister}/>
        <Register/>
        <RegisterPromoter/>
        
        </div>
      </div>

    );
  }
}

export default withRouter(Authentication);
