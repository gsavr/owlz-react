import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../App.css';
import API from "../../../Utils/API"


class Register extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    waitingForServer: false,
    redirect: false,
    username: '',
  }


  // function onclick login
  register = () => {

    if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.password === "") {
      alert("Invalid Credentials");
    }
    else {
      const { firstName, lastName, email, password } = this.state;
      const registerBody = { first_name: firstName, last_name: lastName, email, password };
      this.setState({ waitingForServer: true }, () => {
        API.registerUser(registerBody)
          .then((data) => {
            console.log(data);
            console.log("username state");
            this.setState({username: data.data.email})
            console.log(this.state.username)
            this.props.onSubmit(this.state.username)
            const user = data.data.id;
            this.setState({ userId: user });
            this.props.onRegister(user);
            localStorage.setItem("user", user)
            this.props.history.push(`/dashboard/${user}`);
            window.location.reload();
          })
      })
    }
  }


  // function onclick log out
  logout = () => {
    this.setState({ waitingForServer: false })
  }

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="container">
          <form className="form-log slideUp">
            <h1 className="text-center">Register User</h1>
            <div className="form-group">
              <label htmlFor="InputFirstname">First Name</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="firstName" type="text" className="form-control" id="InputFirstname" placeholder="First name" />
            </div>
            <div className="form-group">
              <label htmlFor="Inputlastname">Last Name</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="lastName" type="text" className="form-control" id="Inputlastname" placeholder="Last name" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Email address</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Password</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="password" type="choose a password" className="form-control" id="InputPassword" placeholder="password" />
            </div>
            <button disabled={this.state.waitingForServer} onClick={this.register} type="submit" className="btn-login">Submit</button>
            <button onClick={this.props.logingInUser} type="button" className="btn-login float-right">Login User <i className="fas fa-user"></i></button>
          </form>
        </div>
      </div>

    );
  }
}

export default withRouter(Register);
