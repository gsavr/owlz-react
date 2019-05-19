import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
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
    login=()=>{
        
      event.preventDefault();

      if(this.state.email === "" || this.state.password === ""){     
        alert("Invalid Credentials");
      }
      else {
        const {email, password} = this.state;
        const registerBody = {email, password};
        this.setState({waitingForServer:true},()=>{
          API.loginPromoter(registerBody)
          .then((data)=>{
            console.log("what i want")
            console.log(data);
            const promoter = data.data.id;
            const email = data.data.email
            this.setState({promoterId:promoter});
            this.props.onRegister(promoter);
            localStorage.setItem("promoter", promoter)
            localStorage.setItem("promoterEmail", email)
            this.props.history.push(`/dashboard/promoter/${promoter}`);
            window.location.reload();
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
          <form className="form-log slideUp">
            <h1 className="text-center">Login Promoter</h1>
            <div className="form-group">
              <label for="exampleInputEmail">Email address</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label for="InputPassword">Password</label>
              <input disabled={this.state.waitingForServer} onChange={this.handleType} name="password" type="password" className="form-control" id="InputPassword" placeholder="Password"/>
            </div>
            <button disabled={this.state.waitingForServer} onClick={this.login} type="submit" className="btn-login">Submit</button>
            <button onClick={this.props.registerPromoter} type="button" className="btn-login float-right">Register Promoter <i className="fas fa-user-tie"></i></button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPromoter);
