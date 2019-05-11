import React, { Component } from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import logo from '../../../logo.svg';
import '../../../App.css';
import API from "../../../Utils/API"


class LoginPromoter extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    waitingForServer: false,
    redirect: false,
  }

  // function onclick login
  register=()=>{
    
    if(this.state.firstName == ""|| this.state.lastName == ""|| this.state.email == "" || this.state.password == ""){     
      alert("Invalid Credentials");
    }
    else {
      const {firstName, lastName, email, password} = this.state;
      const registerBody = {first_name: firstName,last_name:  lastName,email, password};
      this.setState({waitingForServer:true},()=>{
        API.registerUser(registerBody)
        .then((data)=>{
          console.log(data);
          const user = data.data.id;
          this.setState({userId:user});
          this.props.onRegister(user);
          localStorage.setItem("user", user)
          this.props.history.push(`/dashboard/${user}`);
        })
      })
    }
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
        <div>
          <form className="form-log">
            <h1 className="text-center">Login Promoter</h1>
            <div className="form-group">
              <label for="exampleInputEmail">Email address</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label for="InputPassword">Password</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="password" type="password" className="form-control" id="InputPassword" placeholder="Password"/>
            </div>
            <button disabled={this.state.waitingForServer} onClick={this.register} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPromoter);
