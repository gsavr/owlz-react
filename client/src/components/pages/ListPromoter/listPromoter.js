import React, { Component } from 'react';
import logo from '../../../logo.svg';
import './listPromoter.css';
import API from '../../../Utils/API';



class Listpromoter extends Component {

  state = {
    promoters: {}
  }

  componentDidMount() {
      const city =this.props.match.params.city;
      API.getListPromoter(city).then((data)=> {
        console.log(data)
          const promoters = data.data;
          this.setState({ promoters });
        
      });
  }

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  createPromoter = () => {
    let Promoter = []
    for (let i = 0; i < this.state.promoters.length; i++) {
      Promoter.push(
        <div className="row card-profil">
            <div className="col-md-3">
              <img src={this.state.promoters[i].profile_pic} alt="promoter"></img>
            </div>
            <div className="col-md-9">
                <div className="description">
                  <h2>About Me</h2>
                  <hr></hr>
                  <div className="float-right">
                      <i className="fas fa-language"></i> <span>{this.state.promoters[i].languages}</span>
                      <i className="fas fa-city"></i> <span>{this.state.promoters[i].city}</span> 
                  </div>
                  <b>{this.state.promoters[i].first_name} {this.state.promoters[i].last_name}</b>
                  <h4>Description</h4>
                  <hr className="line-hr"></hr>
                  <p>{this.state.promoters[i].descriptions}.</p>
                  <div className="footer-description">
                  <div className="float-right">
                    <button className="btn btn-primary">Contact</button>
                  </div>
                  <ul className="list-inline">
                    <li className="list-inline-item li-description"><i className="fab fa-instagram"></i> {this.state.promoters[i].instagram}
                    </li>
                    <li className="list-inline-item li-description"><i className="fas fa-envelope"></i> {this.state.promoters[i].email}
                    </li>
                    <li className="list-inline-item li-description"><i className="fas fa-mobile"></i> {this.state.promoters[i].phone_number}
                    </li>
                  </ul>
                  </div>
                  
                </div>
            </div>
        </div>
      )
    }
    return Promoter
  }

  render() {
    if( !this.state.promoters[0] ){
      return <div>There are no promoter...</div>;
    }

    return (
      <div>
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>List Promoter</h2>
          <p>From</p>
        </div>
        {/* {JSON.stringify(this.state.promoters)} */}
        <div className="container-fuild">
          {this.createPromoter()}
        </div>
      </div>
    );
  }
}

export default Listpromoter;
