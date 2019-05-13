import React, { Component } from 'react';
import API from '../../../Utils/API';
import './dashboard.css';

    status = {
        userId: "",
        firstName: "",
        lastName: "",
        pasword: "",
        email: "",
        waitingForServer: false
    }

export default class Edit extends Component {

edit=()=>{
    event.preventDefault();
    const {firstName, lastName, email, password} = this.state;
    const registerBody = {first_name: firstName,last_name:  lastName,email, password};
    this.setState({waitingForServer:true},()=>{
      API.UpdateUserById(registerBody)
      .then((data)=>{
        console.log("------ API -------")
        console.log(data);
        
      })
    })
    }

    handleType=(event)=>{
        this.setState({[event.target.name]: event.target.value})
      }


    render() {
        console.log(this.props.componentDidMount)
        return (
            <div>
                <form className="form-log slideUp">
                    <h1 className="text-center">Edit {this.props.componentDidMount.first_name} {this.props.componentDidMount.last_name}</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail">Email address</label>
                        <input onChange={this.handleType} name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder={this.props.componentDidMount.email}/>
                        <p></p>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">Password</label>
                        <input  onChange={this.handleType} name="password" type="password" className="form-control" id="InputPassword" placeholder={this.props.componentDidMount.password}/>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">First Name</label>
                        <input  onChange={this.handleType} name="password" type="password" className="form-control" id="InputFirstName" placeholder={this.props.componentDidMount.first_name}/>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">Last Name</label>
                        <input  onChange={this.handleType} name="password" type="password" className="form-control" id="InputFirstLast" placeholder={this.props.componentDidMount.last_name}/>
                    </div>
                    <button  onClick={this.edit} type="submit" className="btn-login">Submit</button>
                </form>
            </div>
            
        )
    }
}
