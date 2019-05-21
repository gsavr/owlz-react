import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './listPromoter.css';
import API from '../../../Utils/API';
import Message from '../../../components/pages/Message/message';
import Footer from '../../Footer/footer';


class Listpromoter extends Component {

  state = {
    promoters: {},
  }

  componentDidMount() {
    const city = this.props.match.params.city;
    API.getListPromoter(city).then((data) => {
      console.log(data)
      const promoters = data.data;
      this.setState({ promoters });
    });
  }

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  createPromoter = () => {
    let Promoter = []

    for (let i = 0; i < this.state.promoters.length; i++) {
      const id = this.state.promoters[i].id
      const htmlid = `#modal${this.state.promoters[i].id}`
      const selector = `modal${this.state.promoters[i].id}`
      Promoter.push(
        <div className="row card-profil-promoter slideUp">
          <div className="col-md-3">
            <img src={this.state.promoters[i].profile_pic} alt="promoter"></img>
            <ul className="list-inline">
              <li className="list-inline-item li-description">
                <i className="fab fa-instagram"></i> {this.state.promoters[i].instagram}
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div className="description">
            <h1>{this.state.promoters[i].handle || this.state.promoters[i].first_name && this.state.promoters[i].last_name}</h1>
              <hr></hr>
              <div className="float-right">
                <i className="fas fa-language"></i> <span>{this.state.promoters[i].languages}</span>
                <i className="fas fa-city"></i> <span>{this.state.promoters[i].city}</span>
              </div>
             <h4>Description</h4>
              <hr className="line-hr"></hr>
              <p>{this.state.promoters[i].descriptions}.</p>
              <div className="float-right">
                {!this.props.loggedIn && <Link to="/" className="btn-login log-contact">Login In <i className="fas fa-user"></i></Link>}
                {this.props.loggedIn && <button type="button" className="btn-login" data-toggle="modal" data-target={htmlid}>Contact <i className="fas fa-file-signature"></i></button>}
                
                {/* Modal */}
                <div class="modal fade" id={selector} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLabel">Message to {this.state.promoters[i].handle}</h3>
                      </div>
                      <div class="modal-body">
                        <Message idPromoter={id} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return Promoter
  }

  render() {
    console.log(this.props)
    if (!this.state.promoters[0]) {
      return <div>There are no promoter...</div>;
    }

    return (
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-list slideRight">
          <div className="container text-center">
            <h1>List of Promoter</h1>
            <h1>in {this.state.promoters[0].city}</h1>
          </div>
        </div>
        {/* {JSON.stringify(this.state.promoters)} */}
        <div className="container-fuild">
          {this.createPromoter()}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Listpromoter;
