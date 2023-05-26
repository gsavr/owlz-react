import React, { Component } from "react";
import "./footer.css";
import gs from "../images/gs_logo.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="list-inline text-center">
          <a
            className="text-muted list-inline-item li-description mx-2"
            href="https://www.giorgiosavron.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gs} alt="GS-Logo" eight={25} width={25} />
          </a>
          <a
            className="text-muted list-inline-item li-description mx-2"
            href="https://www.linkedin.com/in/giorgio-savron/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin-Logo" height={25} width={25} />
          </a>
          <a
            className="text-muted list-inline-item li-description mx-2"
            href="https://github.com/gsavr/owlz-react"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github-Logo" eight={25} width={25} />
          </a>
        </ul>
        <div className="footer-copyright text-center">
          © 2019 Giorgio Savron & Florian Lahitte
        </div>
      </div>
    );
  }
}
export default Footer;
