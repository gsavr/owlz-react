import React from "react";
import Slider from "react-slick";
import Miami1 from '../images/Lifestyle/Yacht.jpg';
import Miami2 from '../images/mode.jpg';
import Miami3 from '../images/Lifestyle/Cars.jpg';
import Miami4 from '../images/girl.jpg';
import Miami6 from '../images/jet.jpg';
import Miami7 from '../images/party6.jpg';
import Miami8 from '../images/luxury-parties.jpg';
import Miami9 from '../images/pool.png';
import Miami11 from '../images/limo.jpg';

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
      <div className="slick">
        <h1> Experience VIP </h1>
        <Slider {...settings}>
          <div>
            <img src={Miami1} alt="Logo" />
          </div>
          <div>
          <img src={Miami9} alt="Logo" />
          </div>
          <div>
          <img src={Miami6} alt="Logo" />
          </div>
          <div>
            <img src={Miami2} alt="Logo" />
          </div>
          <div>
          <img src={Miami4} alt="Logo" />
          </div>
          <div>
          <img src={Miami3} alt="Logo" />
          </div>
          <div>
            <img src={Miami8} alt="Logo" />
          </div>
          <div>
          <img src={Miami7} alt="Logo" />
          </div>
          <div>
          <img src={Miami11} alt="Logo" />
          </div>
          
        </Slider>
      </div>
    );
  }
}
export default MultipleItems;