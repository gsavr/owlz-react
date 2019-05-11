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
    currentComponent: "loginUser",
  }
  

  // function onclick log out
  logout=()=>{
    this.setState({waitingForServer:false})
  }

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  logingInPromoter=(event)=>{
    event.preventDefault();
    this.setState({currentComponent: "loginPromoter"}); 
  }

  logingInUser=(event)=>{
    event.preventDefault();
    this.setState({currentComponent: "loginUser"}); 
  }
  registerUser=(event)=>{
    event.preventDefault();
    this.setState({currentComponent: "registerUser"}); 
  }

  registerPromoter=(event)=>{
    event.preventDefault();
    this.setState({currentComponent: "registerPromoter"}); 
  }


  display=()=>{
    if(this.state.currentComponent === "loginUser"){
      return <LoginUser registerUser={this.registerUser} onRegister={ this.props.onRegister } />
    }
    else if(this.state.currentComponent === "loginPromoter"){
      return <LoginPromoter registerPromoter={this.registerPromoter}  onRegister={ this.props.onRegister }/>
    }
    else if(this.state.currentComponent === "registerUser"){
      return <Register logingInUser={this.logingInUser} onRegister={ this.props.onRegister } />
    }
    else{
      return <RegisterPromoter logingInPromoter={this.logingInPromoter} />
    }
  }
  

  render() {
    return (

      <div>
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Owlz</h2>
        </div>
  
        <div className="container">

        <button onClick={this.logingInPromoter} name="loginPromoter" type="button" className="btn btn-outline-primary">Promoter</button>
        <button onClick={this.logingInUser} type="button" className="btn btn-outline-success">User</button>
        
        {this.display()}
        
        </div>
      </div>

    );
  }
}

export default withRouter(Authentication);
