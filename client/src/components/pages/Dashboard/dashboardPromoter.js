import React, { Component } from 'react';
import API from '../../../Utils/API';
import './dashboard.css';
import EditPromoter from './editPromoter';
import Footer from '../../Footer/footer';
import { withRouter } from 'react-router-dom';


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
                this.setState({ userChatEmail: data.data.email })
                this.setState({ userChatId: data.data.id })
                this.setState({ userChatName: data.data.first_name })

                const userChatEmail = this.state.userChatEmail;
                const userChatId = this.state.userChatId;
                const userChatName = this.state.userChatName;

                console.log(`User Email for chat: ${this.state.userChatEmail}`);
                console.log(`User Id for chat: ${this.state.userChatId}`)
                console.log(`User Name for chat: ${this.state.userChatName}`)

                localStorage.setItem("userChatMessage", userChatName);
                localStorage.setItem("userChatEmail", userChatEmail);
                localStorage.setItem("userChatId", userChatId);
                window.location.reload();
            });
        });
    }

    messageDelete = (id, confirm) => {
        confirm = false;
        const newBody = { id: id, confirm: confirm }
        API.putMessageById(id, newBody).then((data) => {
            const promoterId = this.props.match.params.id
            API.getMessageByPromoterId(promoterId).then((data) => {
                console.log(data);
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
            // const start = moment(this.state.message[i].start_date).format("LL");
            // const end = moment(this.state.message[i].end_date).format("LL");
            Message.push(
                <div className="card-profil">
                    <button className="btn-login float-right" onClick={() => this.messageConfirm(this.state.message[i].id, this.state.message[i].confirm, this.state.message[i].UserId)}>{!this.state.message[i].confirm ? <b>Accept <i className="fas fa-check"></i></b> : <b>Continue <i className="fas fa-comments"></i></b>}</button>
                    <button className="btn-login float-right" onClick={() => this.messageDelete(this.state.message[i].id)}>Reject <i className="fas fa-times"></i></button>
                    {this.state.message[i].confirm && <div className="validate-promoter float-right" >Request validated</div>}
                    {!this.state.message[i].confirm && this.state.message[i].confirm != null && <div className="validate-promoter float-right" >Refused</div>}
                    {this.state.message[i].confirm === null && <div className="validate-promoter float-right" >Awaiting your answer...</div>}
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
                        <h2>{this.state.promoter.first_name} {this.state.promoter.last_name}</h2>
                    </div>
                </div>
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-profil slideRight">
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
                        <div className="col-md-8 slideLeft">
                            {this.state.edit && <EditPromoter onUpdate={(promoter) => { this.setState({ promoter, edit: false }) }} promoterData={this.state.promoter} />}
                            {!this.state.edit && <div className="card-profil">
                                <h2>About me</h2>
                                <hr></hr>
                                <p>{this.state.promoter.descriptions}</p>
                                <h2>My Clients</h2>
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
