import React, { Component } from 'react';
import logo from '../../../logo.svg';
import API from '../../../Utils/API';
import './dashboard.css';
import Edit from './editUser';


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
                <div className="App-header"><br></br>
                    <h2>Welcome {this.state.user.first_name} {this.state.user.last_name}<img src={logo} className="App-logo" alt="logo" /></h2>
                </div>
                {/* {JSON.stringify(this.state.user)} */}
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-4">
                            {!this.state.edit&&<div className="card-profil slideRight">
                                <img src={this.state.user.profile_pic} alt="user"></img>
                                <p><i className="fab fa-instagram"></i> Instagram</p>
                                <p><i className="fas fa-envelope"></i> {this.state.user.email}</p>
                                <p><i className="fas fa-mobile"></i> 786 212 3888</p>
                                <button onClick={this.edit} type="button" className="btn-login float-right">Register User <i className="fas fa-user-plus"></i></button>
                            </div>}
                            {this.state.edit&&<Edit componentDidMount={this.state.user}/>}
                        </div>
                        <div className="col-md-8 slideLeft">
                            <div className="card-profil">
                                <h2>About Me</h2>
                                <hr></hr>
                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                <h2>My Reservation</h2>
                                <hr></hr>
                                <p>Dr Purple: 26/05/2019 in MIAMI</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
