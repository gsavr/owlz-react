import React, { Component } from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import logo from '../../../logo.svg';
import API from "../../../Utils/API"


class Registerpromoter extends Component {

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
        <div className="container">
          <form className="form-log">
            <h1 className="text-center">Register Promoter</h1>
            <div className="form-group">
              <label for="InputFirstname">First Name</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="firstName" type="text" className="form-control" id="InputFirstname" placeholder="Florian"/>
            </div>
            <div className="form-group">
              <label for="Inputlastname">Last Name</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="lastName" type="text" className="form-control" id="Inputlastname" placeholder="Lahitte"/>
            </div>
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

export default withRouter(Registerpromoter);
