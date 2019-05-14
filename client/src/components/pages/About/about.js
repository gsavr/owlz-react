import React from "react";
import './about.css'
class Home extends React.Component {

  render() {
    return (
      <div className="jumbotron jumbotron-fluid fadeIn">
        <div className="container">
          <h1 className="display-4">About us</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
    );
  }

}

export default Home;
