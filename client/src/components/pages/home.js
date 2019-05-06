import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../App.css';
import API from "../../Utils/API"


class Home extends Component {
  state = {
    city: ""
  }

  searchPromoter=()=>{
    const city = this.state.city;
    const registerBody = {city: city};
    API.getListPromoter(registerBody)
        .then((data)=>{
          console.log(data);
          const city = data.data.city;
          this.setState({city:city});
        })
  }

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

    renderRedirect = ()=> {
    if(this.state.userId){
      return <Redirect to={`/listPromoter/${this.state.city}`} />
    }
   
  }
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h1 className="display-4">Form is Here</h1>
          {this.renderRedirect()}
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          <form className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
              <input  onChange={this.handleType} name="city" type="text" className="form-control" id="city" placeholder="Miami"/>
          </div>
          <button onClick={this.searchPromoter} type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
        </div>
      </div>
    );
  }

}

export default Home;
