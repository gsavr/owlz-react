import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="list-inline text-center">
          <li className="list-inline-item li-description">
            <i className="fab fa-instagram"></i>
          </li>
          <li className="list-inline-item li-description">
            <i className="fab fa-facebook-f"></i>
          </li>
          <li className="list-inline-item li-description">
            <i className="fab fa-twitter"></i>
          </li>
        </ul>
        <div className="footer-copyright text-center ">
          © 2019 Giorgio Savron & Florian Lahitte
        </div>
      </div>
    );
  }
}
export default Footer;
