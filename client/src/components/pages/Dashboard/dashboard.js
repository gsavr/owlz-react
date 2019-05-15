import React, { Component } from 'react';
import API from '../../../Utils/API';
import './dashboard.css';
import Edit from './editUser';
import Footer from '../../Footer/footer'

export default class dashboard extends Component {

    state = {
        user: {},
        edit: false,
    }
    componentDidMount() {
        const id =this.props.match.params.id
        API.getUserById(id).then((data)=> {
            console.log(data)
            const user = data.data;
            this.setState({ user });
        });
    }

    edit=()=>{
        this.setState({edit:true})
      }

      OnEdit=()=>{
        console.log(`this is `+ this.state.user)
      }

    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid jumbotron-dash slideRight">
                    <div className="container text-center">
                        <h2>Welcome</h2> 
                        <h2>{this.state.user.first_name} {this.state.user.last_name}</h2>
                    </div>
                </div>
                {/* {JSON.stringify(this.state.user)} */}
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-profil slideRight">
                                <img src={this.state.user.profile_pic} alt="user"></img>
                                <button onClick={this.edit} type="button" className="btn-login float-right">Edit {this.state.user.first_name} <i class="fas fa-user-edit"></i></button>
                                <p><i className="fas fa-envelope"></i> {this.state.user.email}</p>
                                <p><i className="fas fa-mobile"></i> {this.state.user.phone}</p>
                            </div>
                            
                        </div>
                        <div className="col-md-8 slideLeft">
                        {this.state.edit&&<Edit onUpdate={(user)=>{this.setState({user, edit: false})}} userData={this.state.user}/>}
                        {!this.state.edit&&<div className="card-profil">
                                <h2>My Reservation</h2>
                                <hr></hr>
                                <p>Dr Purple: 26/05/2019 in MIAMI</p>
                            </div>}
                         
                        </div>
                    </div>
                    <Footer/>
                </div>

            </div>
            
        )
    }
}
