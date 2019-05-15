import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import API from '../../../Utils/API';
import './dashboard.css';



class Edit extends Component {
    state = {
        userId: this.props.userData.id,
        last_name: this.props.userData.last_name,
        first_name: this.props.userData.first_name,
        password: this.props.userData.password,
        email: this.props.userData.email,
        phone: this.props.userData.phone,
        profile_pic: this.props.userData.profile_pic,
        waitingForServer: false,
        picOk: false
    }
    
    edit=()=>{
        event.preventDefault();
        const {userId, last_name, first_name, email, password,phone, profile_pic} = this.state;
        const registerBody = {id: userId, last_name, first_name, email, password, profile_pic,phone};
        console.log(registerBody);
        this.setState({waitingForServer:true},()=>{
        API.UpdateUser(userId, registerBody)
            .then((data)=>{
                console.log("------ API -------")
                console.log(data);
                 this.props.onUpdate({...this.props.userData, ...registerBody});
                
            })
        })
    }

    handleType=(event)=>{
        this.setState({[event.target.name]: event.target.value})
      }

    showWidget = () =>{
        event.preventDefault();
        window.cloudinary.openUploadWidget({
            cloudName: "gsafl",
            uploadPreset: "m48qyart",
            sources: [ 'local', 'url', 'instagram']},
            (error, result) => {
                if (result.event === "success") { //if (result && result.event === "success")
                this.setState({picOk: true})
                this.state.profile_pic = result.info.url
                };
                }
        )
    }

    render() {
        
        return (
            <div>
                <form className="form-log-user slideUp">
                    <h1 className="text-center">Edit {this.props.userData.first_name} {this.props.userData.last_name}</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail">Email address</label>
                        <input onChange={this.handleType} name="email" type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder={this.props.userData.email}/>
                        <p></p>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">Password</label>
                        <input  onChange={this.handleType} name="password" type="password" className="form-control" id="InputPassword" placeholder={this.props.userData.password}/>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">First Name</label>
                        <input  onChange={this.handleType} name="first_name" type="text" className="form-control" id="InputFirstName" placeholder={this.props.userData.first_name}/>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">Last Name</label>
                        <input  onChange={this.handleType} name="last_name" type="text" className="form-control" id="InputFirstLast" placeholder={this.props.userData.last_name}/>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">Phone</label>
                        <input  onChange={this.handleType} name="phone" type="text" className="form-control" id="InputPhone" placeholder={this.props.userData.phone}/>
                    </div>
                    <div className="form-group">
                        <label for="InputPassword">Image</label><br></br>
                        <button onClick={this.showWidget} className="btn-login">{this.state.picOk&&<i className="far fa-check-square"></i>} Upload Picture <i className="fas fa-image"></i></button>
                    </div>
                    <button  onClick={this.edit} type="submit" className="btn-login">Submit</button>
                </form>
            </div>  
        )
    }
}

export default withRouter(Edit);
