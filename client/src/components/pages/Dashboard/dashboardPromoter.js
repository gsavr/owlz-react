import React, { Component } from 'react';
import logo from '../../../logo.svg';
import API from '../../../Utils/API';
import './dashboard.css';



export default class dashboardPromoter extends Component {

    state = {
        promoter: {

            first_name: 'blah',
            last_name: 'blah',
            email: 'bla'
        },
    }
    componentDidMount() {
        const id =this.props.match.params.id
       // alert(id);
        API.getPromoterById(id).then((data)=> {
            console.log(data)
            const promoter = data.data;
            this.setState({ promoter });
        });
    }

    render() {
        return (
            <div>
                <div className="App-header"><br></br>
                    <h2>Welcome {this.state.promoter.first_name} {this.state.promoter.last_name}<img src={logo} className="App-logo" alt="logo" /></h2>
                </div>
                {/* {JSON.stringify(this.state.promoter)} */}
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-profil">
                                <img src={this.state.promoter.profile_pic} alt="promoter"></img>
                                <p><i className="fab fa-instagram"></i> Instagram</p>
                                <p><i className="fas fa-envelope"></i> {this.state.promoter.email}</p>
                                <p><i className="fas fa-mobile"></i> 786 212 3888</p>
                            </div>
                        </div>
                        <div className="col-md-8">
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
