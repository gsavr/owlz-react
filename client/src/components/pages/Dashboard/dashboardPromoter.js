import React, { Component } from 'react';
import API from '../../../Utils/API';
import './dashboard.css';
import EditPromoter from './editPromoter';
import Footer from '../../Footer/footer'


export default class dashboardPromoter extends Component {

    state = {
        promoter: {},
        edit: false,
    }
    componentDidMount() {
        const id =this.props.match.params.id
        API.getPromoterById(id).then((data)=> {
            console.log(data)
            const promoter = data.data;
            this.setState({ promoter });
        });
    }

    edit=()=>{
        this.setState({edit:true})
      }

      OnEdit=()=>{
        console.log(`this is `+ this.state.promoter)
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
