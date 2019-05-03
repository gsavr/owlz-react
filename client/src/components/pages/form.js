import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Form extends Component {

  state = {
    loggedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  // function onclick login
  login=()=>{
    alert(`your user is ${this.state.firstName}`)
    this.setState({loggedIn:true})
  }

  // function onclick log out
  logout=()=>{
    this.setState({loggedIn:false})
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
          <p>Please Login In</p>
        </div>

        {this.state.loggedIn?<div>You are login<button onClick={this.logout}>log out</button></div>:
        <div className="container">
          <form className="form-log">
            <h1 className="text-center">Log In</h1>
            <div className="form-group">
              <label for="InputFirstname">First Name</label>
              <input onChange={this.handleType} name="firstName" type="text" className="form-control" id="InputFirstname" placeholder="Florian"/>
            </div>
            <div className="form-group">
              <label for="Inputlastname">Last Name</label>
              <input onChange={this.handleType} name="firstLast" type="text" className="form-control" id="Inputlastname" placeholder="Lahitte"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail">Email address</label>
              <input onChange={this.handleType} name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label for="InputPassword">Password</label>
              <input onChange={this.handleType} name="password" type="password" className="form-control" id="InputPassword" placeholder="Password"/>
            </div>
            <button onClick={this.login} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>}
      </div>
      
    );
  }
}

export default Form;
