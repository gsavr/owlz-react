import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

class Form extends Component {
  state= {
    loggedIn: false,
  }
  render() {
    return (
      <div>
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Owlz</h2>
          <p>Please Login In</p>
        </div>
        <div className="container">
          <form className="form-log">
          <h1 className="text-center">Log In</h1>
          <div className="form-group">
            <label for="InputFirstname">First Name</label>
            <input type="text" className="form-control" id="InputFirstname" placeholder="Florian"/>
          </div>
          <div className="form-group">
            <label for="Inputlastname">Last Name</label>
            <input type="text" className="form-control" id="Inputlastname" placeholder="Lahitte"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div className="form-group">
            <label for="InputPassword">Password</label>
            <input type="password" className="form-control" id="InputPassword" placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
      </div>
      
    );
  }
}

export default Form;
