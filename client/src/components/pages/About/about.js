import React from "react";
import './about.css'
import Image1 from '../../images/skyline.jpg'
import Footer from '../../Footer/footer'
import Barre from '../../images/barre.png';
class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid jumbotron-about fadeIn">
          <div className="container">
            <h1 className="display-4 text-center">about us</h1>
            <p className="lead text-center">Our experience will bring your experience to VIP.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className='text-about slideLeft'>
                <h1 className="text-center">who we are</h1>
                <p>As people with a passion for travel, experiencing new cultures, and partying, we are fortunate to have a network of awesome liaisons that show us a good time every time.</p>
                <p>We know visitors to major cities are looking for this same experience, yet there is no service that connects them to the insiders running the scene.</p>
                <p>Now with Owlz this experience is possible. Owlz takes a friendly and personalized approach to hospitality connecting you with the best liaisons the city has to offer.</p>
                <p>Our clients experience the city like they never have before.</p>
                <p>-Sincerely, the team at Owlz</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className='image-about slideRight'>
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

export default Home;
