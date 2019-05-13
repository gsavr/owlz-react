import React from "react";
import Slider from "react-slick";
import Miami1 from '../images/Lifestyle/Yacht.jpg';
import Miami2 from '../images/music.jpg';
import Miami3 from '../images/Lifestyle/Cars.jpg';
import Miami4 from '../images/Nightlife/Story.jpg';
import Miami6 from '../images/artbasel.jpg';
import Miami7 from '../images/Nightlife/LIV.jpg';
import Miami8 from '../images/luxury-parties.jpg';
import Miami9 from '../images/eleven.jpg';
import Miami11 from '../images/Events/Fashion.jpg';

import './slick.css'
 
class MultipleItems extends React.Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          autoplay: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
        };
        return (
          <div className="container slick">
            <h2> Experience VIP </h2>
            <Slider {...settings}>
              <div>
                <img src={Miami1} alt="Logo" />
              </div>
              <div>
              <img src={Miami8} alt="Logo" />
              </div>
              <div>
              <img src={Miami3} alt="Logo" />
              </div>
              <div>
                <img src={Miami6} alt="Logo" />
              </div>
              <div>
              <img src={Miami11} alt="Logo" />
              </div>
              <div>
              <img src={Miami2} alt="Logo" />
              </div>
              <div>
                <img src={Miami7} alt="Logo" />
              </div>
              <div>
              <img src={Miami4} alt="Logo" />
              </div>
              <div>
              <img src={Miami9} alt="Logo" />
              </div>
              
            </Slider>
          </div>
        );
  }
}
export default MultipleItems;