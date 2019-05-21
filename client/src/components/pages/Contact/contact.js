import React from "react";
import './contact.css'
import Image1 from '../../images/brickell.jpg'
import Footer from '../../Footer/footer'
import Barre from '../../images/barre.png';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-contact slideRight">
          <div className="container">
            <h1 className="display-4 text-center">Contact us</h1>
            <p className="lead text-center">Our experience will bring your experience to VIP.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className='text-contact text-center slideLeft'>
                <h1>Address</h1>
                <p><i className="fas fa-map-marked-alt"></i> 151 NW 1st 33120, Brickell, Florida</p>
                <p><i className="fas fa-phone-square"></i> 305 768 9543</p>
                <p><i className="fab fa-facebook-square"></i> Facebook</p>
                <p><i className="fab fa-instagram"></i> Instagram</p>
                <p><i className="fab fa-twitter-square"></i> Twitter</p>
                <p></p>
              </div>
            </div>
            <div className="col-md-6">
              <div className='image-contact slideRight'>
                <img src={Image1} alt="Logo" />
              </div>
            </div>
          </div>
          <div className="barre">
            <img src={Barre} alt="Logo" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default Contact;
