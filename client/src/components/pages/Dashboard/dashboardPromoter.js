import React, { Component } from 'react';
import API from '../../../Utils/API';
import './dashboard.css';
import EditPromoter from './editPromoter';
import Footer from '../../Footer/footer'


export default class dashboardPromoter extends Component {

    state = {
        promoter: {},
        message:{},
        edit: false,
        confirm: "",
    }
    componentDidMount() {
        const id =this.props.match.params.id
        API.getPromoterById(id).then((data)=> {
            console.log("Promoter data")
            console.log(data)
            const promoter = data.data;
            this.setState({ promoter });
        });
        API.getMessageById(id).then((data)=> {
            console.log("Message data")
            console.log(data)
            const message = data.data;
            this.setState({ message });
        });
    }

    messageConfirm=(id)=>{
        const newId = id -1
        this.state.message[newId].confirm
        console.log(this.state.message[newId].confirm)
        this.setState({confirm: true})
        const {confirm} = this.state;
        console.log(this.state.confirm)
        const newBody = {id: id ,confirm: confirm}
        API.putMessageById(id, newBody).then((data)=> {
            console.log("Message confirm data ")
            console.log(data)
        });
    }

    messageDelete=(id)=>{
        this.setState({confirm: false})
        const {confirm} = this.state;
        const newBody = {confirm}
        API.putMessageById(id, newBody).then((data)=> {
            console.log("Message Delete data")
            console.log(data)
        });
      
        
    }



    edit=()=>{
        this.setState({edit:true})
      }

      OnEdit=()=>{
        console.log(`this is `+ this.state.promoter)
      }

      messages = () => {
        let Message = []
    
        for (let i = 0; i < this.state.message.length; i++) {
            // const start = moment(this.state.message[i].start_date).format("LL");
            // const end = moment(this.state.message[i].end_date).format("LL");
            Message.push(
                <div className="card-profil">
                    <button className="btn-login float-right" onClick={()=> this.messageConfirm(this.state.message[i].id)}>Accept <i className="fas fa-check"></i></button>
                    <button className="btn-login float-right" onClick={() => this.messageDelete(this.state.message[i].id)}>Reject <i className="fas fa-times"></i></button>
                    {this.state.message[i].confirm&&<div>you have valid</div>}
                    {!this.state.message[i].confirm&&<div>Refused</div>}

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
                            {this.state.edit&&<EditPromoter onUpdate={(promoter)=>{this.setState({promoter, edit: false})}} promoterData={this.state.promoter}/>}
                            {!this.state.edit&&<div className="card-profil">
                                <h2>About me</h2>
                                <hr></hr>
                                <p>{this.state.promoter.descriptions}</p>
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
