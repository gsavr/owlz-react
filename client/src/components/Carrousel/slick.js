import React from "react";
import Slider from "react-slick";
import Miami1 from '../images/miami.jpg';
import Miami2 from '../images/miami-night.jpg';
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
              <img src={Miami2} alt="Logo" />
              </div>
              <div>
              <img src={Miami1} alt="Logo" />
              </div>
              <div>
                <img src={Miami1} alt="Logo" />
              </div>
              <div>
              <img src={Miami2} alt="Logo" />
              </div>
              <div>
              <img src={Miami1} alt="Logo" />
              </div>
              <div>
                <img src={Miami1} alt="Logo" />
              </div>
              <div>
              <img src={Miami2} alt="Logo" />
              </div>
              <div>
              <img src={Miami1} alt="Logo" />
              </div>
              
            </Slider>
          </div>
        );
  }
}
export default MultipleItems;