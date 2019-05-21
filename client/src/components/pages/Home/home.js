import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slick from '../../Carrousel/slick';
import Footer from '../../Footer/footer';
import '../../Footer/footer.css'
import './home.css';
import API from "../../../Utils/API"
import Miami1 from '../../images/story.jpg';
import Barre from '../../images/barre.png';

class Home extends Component {
  state = {
    city: ""
  }

  searchPromoter = () => {
    event.preventDefault();
    const city = this.state.city;
    const registerBody = { city: city };
    console.log(registerBody);
    API.getListPromoter(city)
      .then((data) => {
        console.log(data);
        const city = data.data.city;
        this.setState({ city: city });
      })
    this.renderRedirect();
  }

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  renderRedirect = () => {
    this.props.history.push(`/listpromoter/${this.state.city}`)
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid slideRight">
          <div className="container text-center">
            <h1 className="display-4">Welcome to Owlz</h1>
            <p className="lead">Find Your Promoter.</p>
            <form className="form-inline">
              <div className="form-row">
                <input onChange={this.handleType} name="city" type="text" className="form-control" id="city" placeholder="Miami" />
                <button onClick={this.searchPromoter} className="btn btn-login mb-2">Search</button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="ourConcept">
            <h1 className="text-center">Our Concept</h1>
            <div className="row">
              <div className="col-md-6">
                <div className='image-concept slideRight'>
                  <img src={Miami1} alt="Logo" />
                </div>
              </div>
              <div className="col-md-6">
                <div className='text-concept slideLeft'>
                  <ul>
                    <li>
                      <h5><i className="fas fa-check"></i> Connect</h5>
                      <p>Connect with a VIP Liaison in the city you are traveling to.</p>
                    </li>
                    <li>
                      <h5> <i className="fas fa-check"></i> Book</h5>
                      <p>Explore what the city has to offer creating the perfect itinerary.</p>
                    </li>
                    <li>
                      <h5><i className="fas fa-check"></i> Experience</h5>
                      <p>Experience the city like you never have before with an insider guiding you every step of the way</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="barre">
            <img src={Barre} alt="Logo" />
          </div>
        </div>
        <div className="container text-center">
          <Slick />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Home);
