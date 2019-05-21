import React, { Component } from 'react';
import Moment from 'moment';
import API from '../../../Utils/API';
import './dashboard.css';
import EditPromoter from './editPromoter';
import Footer from '../../Footer/footer';
import { withRouter } from 'react-router-dom';
import Barre from '../../images/barre.png';



class dashboardPromoter extends Component {

    state = {
        promoter: {},
        message: [],
        edit: false,
        userChatEmail: "",
        userChatId: "",
        userChatName: "",
    }
    componentDidMount() {
        const id = this.props.match.params.id
        API.getPromoterById(id).then((data) => {
            const promoter = data.data;
            API.getMessageByPromoterId(id).then((data) => {
                this.setState({ message: data.data, promoter })
            });
        });
    }



    messageConfirm = (id, confirm, userId) => {
        confirm = true;
        const newBody = { id: id, confirm: confirm }
        API.putMessageById(id, newBody).then((data) => {
            const promoterId = this.props.match.params.id
            API.getMessageByPromoterId(promoterId).then((data) => {
                this.setState({ message: data.data })
            });
            API.getUserById(userId).then((data) => {
                const infoData = {
                    userEmail: data.data.email,
                    userName: data.data.first_name,
                    promoterEmail: this.state.promoter.email,
                    promoterName: this.state.promoter.handle
                  }
                  this.props.newChat(infoData);
            });
        });
    }

    messageDelete = (id, confirm) => {
        confirm = false;
        const newBody = { id: id, confirm: confirm }
        API.putMessageById(id, newBody).then((data) => {
            const promoterId = this.props.match.params.id
            API.getMessageByPromoterId(promoterId).then((data) => {
                this.setState({ message: data.data })
            });
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
                    {/* If confirm is null button */}
                    {this.state.message[i].confirm === null &&<div><button className="btn-login float-right" onClick={()=> this.messageConfirm(this.state.message[i].id, this.state.message[i].confirm, this.state.message[i].UserId)}>{!this.state.message[i].confirm?<b>Accept <i className="fas fa-check"></i></b>:<b>Contact him <i className="fas fa-comments"></i></b>}</button>
                    <button className="btn-login float-right" onClick={() => this.messageDelete(this.state.message[i].id)}>Reject <i className="fas fa-times"></i></button></div>}

                    {/* Confirm is true or false */}
                    {this.state.message[i].confirm &&<button className="btn-login float-right" onClick={()=> this.messageConfirm(this.state.message[i].id, this.state.message[i].confirm, this.state.message[i].UserId)}>{!this.state.message[i].confirm?<b>Accept <i className="fas fa-check"></i></b>:<b>Contact him <i className="fas fa-comments"></i></b>}</button>}
                    {!this.state.message[i].confirm && this.state.message[i].confirm != null&&<button className="btn-login float-right" onClick={() => this.messageDelete(this.state.message[i].id)}>Reject <i className="fas fa-times"></i></button>}

                    <h4>Date <i className="fas fa-calendar-alt"></i> : <span className="text-message">{start} to {end}</span></h4>
                    <h4>Guests <i className="fas fa-user-friends"></i> : <span className="text-message">{this.state.message[i].guests}</span></h4>
                    <h4>Occassion <i className="fas fa-gift"></i> : <span className="text-message">{this.state.message[i].occasion}</span></h4>
                    <h4>Message <i className="fas fa-comments"></i> : <span className="text-message">{this.state.message[i].message}</span></h4>
                    <img className="card-message-img" src={Barre} alt="Logo" />
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
                        <h1>{this.state.promoter.first_name} {this.state.promoter.last_name}</h1>
                    </div>
                </div>
                <div className="container-fuild">
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md-4">
                            <div className="card-profil-promoter slideRight">
                                <img src={this.state.promoter.profile_pic} alt="promoter"></img>
                                <button onClick={this.edit} type="button" className="btn-login float-right">Edit {this.state.promoter.first_name} <i className="fas fa-user-edit"></i></button>
                                <p><i className="fas fa-signature"></i> {this.state.promoter.handle}</p>
                                <p><i className="fas fa-envelope"></i> {this.state.promoter.email}</p>
                                <p><i className="fas fa-mobile"></i> {this.state.promoter.phone}</p>
                                <p><i className="fas fa-city"></i> {this.state.promoter.city}</p>
                                <p><i className="fas fa-language"></i> {this.state.promoter.languages}</p>
                                <p><i className="fab fa-instagram"></i> {this.state.promoter.instagram}</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-8 slideLeft">
                            {this.state.edit && <EditPromoter onUpdate={(promoter) => { this.setState({ promoter, edit: false }) }} promoterData={this.state.promoter} />}
                            {!this.state.edit && <div className="card-parent-message-promoter">
                                <h1>About me</h1>
                                <hr></hr>
                                <p>{this.state.promoter.descriptions}</p>
                                <h1>My Clients</h1>
                                <hr></hr>
                                {this.messages()}
                            </div>}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>

        )
    }
}

export default withRouter(dashboardPromoter);
