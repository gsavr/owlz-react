import React, { Component } from 'react';
import logo from '../../../logo.svg';
import API from '../../../Utils/API';
import './dashboard.css';



export default class dashboard extends Component {

    state = {
        user: {},
    }
    componentDidMount() {
        const id =this.props.match.params.id
       // alert(id);
        API.getUserById(id).then((data)=> {
            console.log(data)
            const user = data.data;
            this.setState({ user });
        });
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
                            <div className="card-profil">
                                <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"></img>
                                <p><i class="fab fa-instagram"></i> Instagram</p>
                                <p><i class="fas fa-envelope"></i> {this.state.user.email}</p>
                                <p><i class="fas fa-mobile"></i> 786 212 3888</p>
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
