import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
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
  }

  // function onclick login
  register=()=>{
    
    if(this.state.firstName === ""|| this.state.lastName === ""|| this.state.email === "" || this.state.password === ""){     
      alert("Invalid Credentials");
    }
    else {
      const {firstName, lastName, email, password, handle, descriptions, city, languages, phone} = this.state;
      const registerBody = {first_name: firstName,last_name:  lastName,email, password, handle, descriptions, city, languages,phone_number: phone };
      this.setState({waitingForServer:true},()=>{
        API.registerPromoter(registerBody)
        .then((data)=>{
          console.log(data);
          const promoter = data.data.id;
          this.setState({promoterId:promoter});
          this.props.onRegister(promoter);
          localStorage.setItem("promoter", promoter)
          this.props.history.push(`/dashboard/promoter/${promoter}`);
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
          <form className="form-log slideUp">
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
            <div className="form-group">
              <label for="InputPassword">Handle</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="handle" type="text" className="form-control" id="InputHandle" placeholder="FloWeb"/>
            </div>
            <div className="form-group">
              <label for="InputPassword">Description</label>
              <textarea disabled={this.state.waitingForServer} onChange={this.handleType} name="description" type="text" className="form-control" id="InputDescription" placeholder="I'm the best"/>
            </div>
            <div className="form-group">
              <label for="InputPassword">City</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="city" type="text" className="form-control" id="InputCity" placeholder="Miami"/>
            </div>
            <div className="form-group">
              <label for="InputPassword">Language</label>
              <select disabled={this.state.waitingForServer} onChange={this.handleType} name="language" type="text" className="form-control" id="InputLanguage">
                <option value="" default>Your Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Spanish">French</option>
                <option value="Chinese">Chinese</option>
              </select>
             
            </div>
            <div className="form-group">
              <label for="InputPassword">Phone</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="phone" type="text" className="form-control" id="InputPhone" placeholder="+786 212 3666"/>
            </div>
            
            <button disabled={this.state.waitingForServer} onClick={this.register} type="submit" className="btn-login">Submit</button>
            <button onClick={this.props.logingInPromoter} name="loginPromoter" type="button" className="btn-login float-right">Login Promoter <i className="fas fa-user-tie"></i></button>
          </form>
        </div>
      </div>
      
    );
  }
}

export default withRouter(Registerpromoter);
