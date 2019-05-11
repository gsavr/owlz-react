import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Slick from '../../Carrousel/slick';
import Footer from '../../Footer/footer';
import '../../Footer/footer.css'
import './home.css';
import API from "../../../Utils/API"


class Home extends Component {
  state = {
    city: ""
  }

  searchPromoter=()=>{
    event.preventDefault();
    const city = this.state.city;
    const registerBody = {city: city};

      console.log(registerBody);

    API.getListPromoter(city)
        .then((data)=>{
          console.log(data);
          const city = data.data.city;
          this.setState({city:city});
        })

        this.renderRedirect();
  }

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

    renderRedirect = ()=> {
      this.props.history.push( `/listpromoter/${ this.state.city }`)
  }
  
  render() {
    return (
      <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">Welcome to Owlz</h1>
          <p className="lead">Find Your Promoter.</p>
          <form className="form-inline">
          <div className="form-row">
              <input  onChange={this.handleType} name="city" type="text" className="form-control" id="city" placeholder="Miami"/>
              <button onClick={this.searchPromoter} className="btn btn-primary mb-2">Search</button>
          </div>
          </form>
        </div>
      </div>
      <div className="text-center">
        <Slick/>
      </div>
      <Footer/>
      </div>
    );
  }

}

export default withRouter(Home);
