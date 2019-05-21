import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../../App.css';
import API from "../../../Utils/API"


class LoginUser extends Component {
  state = {
    email: "",
    password: "",
    waitingForServer: false,
  }

  // function onclick login
  login = () => {

    event.preventDefault();

    if (this.state.email === "" || this.state.password === "") {
      alert("Invalid Credentials");
    }
    else {
      const { email, password } = this.state;
      const registerBody = { email, password };
      this.setState({ waitingForServer: true }, () => {
        API.loginUser(registerBody)
          .then((data) => {
            if (data.data === null) {
              alert("Email or Password wrong!");
              this.setState({ waitingForServer: false });
            } else {
              console.log(data);
              const user = data.data.id;
              const email = data.data.email
              this.setState({ userId: user });
              this.props.onRegister(user);
              localStorage.setItem("user", user)
              localStorage.setItem("userEmail", email);
              this.props.history.push(`/dashboard/${user}`);
              window.location.reload();
            }
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
        <div>
          <form className="form-log slideUp">
            <h1 className="text-center">Login User</h1>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Email address</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Password</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="password" type="password" className="form-control" id="InputPassword" placeholder="Password" />
            </div>
            <button disabled={this.state.waitingForServer} onClick={this.login} type="submit" className="btn-login">Submit</button>
            <button onClick={this.props.registerUser} type="button" className="btn-login float-right">Register User <i className="fas fa-user-plus"></i></button>
          </form>

        </div>
      </div>
    );
  }
}

export default withRouter(LoginUser);
