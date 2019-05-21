import React, { Component } from 'react';
import Moment from 'moment';
import API from '../../../Utils/API';
import './dashboard.css';
import Edit from './editUser';
import Footer from '../../Footer/footer'
import Barre from '../../images/barre.png';

export default class dashboard extends Component {

    state = {
        user: {},
        message: {},
        edit: false,
    }
    componentDidMount() {
        const id = this.props.match.params.id
        API.getUserById(id).then((data) => {
            const user = data.data;
            this.setState({ user });
        });
        API.getMessageByUserId(id).then((data) => {
            const message = data.data;
            this.setState({ message });
        });
    }

    edit = () => {
        this.setState({ edit: true })
    }

    messages = () => {
        let Message = []
        for (let i = 0; i < this.state.message.length; i++) {
            const start = Moment(this.state.message[i].start_date).format("LL");
            const end = Moment(this.state.message[i].end_date).format("LL");
            Message.push(
                <div className="card-message">
                    {this.state.message[i].confirm && <div className="float-right validate text-center">
                        <span>The promoter you requested has confirmed he is availble <i className="fas fa-laugh-beam"></i><br></br>He will be contacting you soon via the Chat</span>
                    </div>}
                    <h4>Date <i className="fas fa-calendar-alt"></i> : <span className="text-message">{start} to {end}</span></h4>
                    <h4>Guests <i className="fas fa-user-friends"></i> : <span className="text-message">{this.state.message[i].guests}</span></h4>
                    <h4>Occassion <i className="fas fa-gift"></i> : <span className="text-message">{this.state.message[i].occasion}</span></h4>
                    <h4>Message <i className="fas fa-comments"></i> : <span className="text-message">{this.state.message[i].message}</span></h4>
                    {!this.state.message[i].confirm && this.state.message[i].confirm != null && <div className="validate text-center">The promoter is not available for the dates requested. Please search again <i className="fas fa-sad-cry"></i></div>}
                    {this.state.message[i].confirm === null && <div className="validate text-center">Waiting for the promoter...</div>}
                    <div className="barre">
                        <img className="card-message-img" src={Barre} alt="Logo" />
                    </div>
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
                        <h1>Welcome</h1>
                        <h1>{this.state.user.first_name} {this.state.user.last_name}</h1>
                    </div>
                </div>
                {/* {JSON.stringify(this.state.user)} */}
                <div className="container-fuild">
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-4">
                            <div className="card-profil user slideRight">
                                <img src={this.state.user.profile_pic} alt="user"></img>
                                <button onClick={this.edit} type="button" className="btn-login float-right">Edit {this.state.user.first_name} <i className="fas fa-user-edit"></i></button>
                                <p><i className="fas fa-envelope"></i> {this.state.user.email}</p>
                                <p><i className="fas fa-mobile"></i> {this.state.user.phone}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 slideLeft">
                            {this.state.edit && <Edit onUpdate={(user) => { this.setState({ user, edit: false }) }} userData={this.state.user} />}
                            {!this.state.edit && <div className="card-parent-message">
                                <h1>My Reservation</h1>
                                <hr></hr>
                                {this.messages()}
                            </div>}

                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
