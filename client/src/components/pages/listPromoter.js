import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';



class Listpromoter extends Component {

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div>
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>List Promoter</h2>
          <p>From</p>
        </div>
  
        <div className="container">
       
        </div>
      </div>
      
    );
  }
}

export default Listpromoter;
