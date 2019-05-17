import React, { Component } from 'react';
import API from '../../../Utils/API';
import './dashboard.css';
import Edit from './editUser';
import Footer from '../../Footer/footer'

export default class dashboard extends Component {

    state = {
        user: {},
        message: {},
        edit: false,
    }
    componentDidMount() {
        const id =this.props.match.params.id
        API.getUserById(id).then((data)=> {
            console.log(data)
            const user = data.data;
            this.setState({ user });
        });
        API.getMessageByUserId(id).then((data)=> {
            console.log(data)
            const message = data.data;
            this.setState({ message });
        });
    }

    edit=()=>{
        this.setState({edit:true})
      }

    messages = () => {
    let Message = []
    for (let i = 0; i < this.state.message.length; i++) {
        // const start = moment(this.state.message[i].start_date).format("LL");
        // const end = moment(this.state.message[i].end_date).format("LL");
        Message.push(
            <div className="card-profil">
                {this.state.message[i].confirm&&<div className="float-right validate text-center">
                You have been Validated <i className="fas fa-laugh-beam"></i>
                <p>the promoter will contact you</p>
                </div>}
                {!this.state.message[i].confirm && this.state.message[i].confirm != null &&<div className="float-right validate text-center">You have been Refused <i className="fas fa-sad-cry"></i></div>}
                {this.state.message[i].confirm === null&&<div className="float-right validate text-center">Waiting the promoter...</div>}
                <h4>Date <i className="fas fa-calendar-alt"></i> : <span className="text-message">{this.state.message[i].start_date} to {this.state.message[i].end_date}</span></h4>
                <h4>Guests <i className="fas fa-user-friends"></i> : <span className="text-message">{this.state.message[i].guests}</span></h4>
                <h4>Occassion <i className="fas fa-gift"></i> : <span className="text-message">{this.state.message[i].occasion}</span></h4>
                <h4>Message <i className="fas fa-comments"></i> : <span className="text-message">{this.state.message[i].message}</span></h4>
            </div>
            
        )
    }
    return Message
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
                                {this.messages()}
                            </div>}
                         
                        </div>
                    </div>
                    <Footer/>
                </div>

            </div>
            
        )
    }
}
