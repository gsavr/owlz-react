import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import '../../../App.css';
import './authentication.css';
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
    else if(this.state.currentComponent === "registerPromoter"){
      return <RegisterPromoter logingInPromoter={this.logingInPromoter} onRegister={this.props.onRegister} />
    }
  }
  

  render() {
    return (

      <div>
        <div className="App App-login">
          <h2>Login / Register to Owlz</h2>
          <button onClick={this.logingInPromoter} name="loginPromoter" type="button" className="log-type">
            <i class="fas fa-user-tie"></i> 
            <p>Promoter</p>
           </button>
          <button onClick={this.logingInUser} type="button" className="log-type">
            <i class="fas fa-users"></i> 
             <p>User</p>
          </button>
        </div>
  
        <div className="container">
          {this.display()}
        </div>
      </div>

    );
  }
}

export default withRouter(Authentication);
