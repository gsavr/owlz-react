import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import API from "../../../Utils/API"


class Registerpromoter extends Component {

  state = {
    firstName: "",
    lastName: "",
    email: "",
    descriptions: "",
    city: "",
    languages: "",
    handle: "",
    phone: "",
    password: "",
    waitingForServer: false,
    redirect: false,
    username: '',
  }

  // function onclick login
  register = () => {
    event.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.password === "") {
      alert("Invalid Credentials");
    }
    else {
      const { firstName, lastName, email, password, handle, descriptions, city, languages, phone } = this.state;
      const registerBody = { first_name: firstName, last_name: lastName, email, password, handle, descriptions, city, languages, phone };
      console.log(registerBody);
      this.setState({ waitingForServer: true }, () => {
        API.registerPromoter(registerBody)
          .then((data) => {
            console.log(data);
            this.setState({username: data.data.email})
            this.props.onSubmit(this.state.username)

            const promoter = data.data.id;
            this.setState({ promoterId: promoter });
            this.props.onRegister(promoter);
            localStorage.setItem("promoter", promoter)
            this.props.history.push(`/dashboard/promoter/${promoter}`);
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
            <h1 className="text-center">Register Promoter</h1>
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
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="password" type="password" className="form-control" id="InputPassword" placeholder="choose your password" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Handle</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="handle" type="text" className="form-control" id="InputHandle" placeholder="@handle" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Description</label>
              <textarea disabled={this.state.waitingForServer} onChange={this.handleType} name="descriptions" type="text" className="form-control" id="InputDescription" placeholder="Describe your services" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">City</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="city" type="text" className="form-control" id="InputCity" placeholder="City" />
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Language</label>
              <select disabled={this.state.waitingForServer} onChange={this.handleType} name="languages" type="text" className="form-control" id="InputLanguages">
                <option value="" default>Your Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="Chinese">Chinese</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="InputPassword">Phone</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="phone" type="text" className="form-control" id="InputPhone" placeholder="Phone Number" />
            </div>
            <button disabled={this.state.waitingForServer} onClick={this.register} type="submit" className="btn-login">Submit</button>
          </form>
        </div>
      </div>

    );
  }
}

export default withRouter(Registerpromoter);
