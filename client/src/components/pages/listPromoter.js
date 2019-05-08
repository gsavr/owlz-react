import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import API from '../../Utils/API';



class Listpromoter extends Component {

  state = {
    promoters: {}
  }

componentDidMount() {
    const city =this.props.match.params.city;

    console.log(city)

   // alert(id);
    API.getListPromoter(city).then((data)=> {

      console.log( data )
        const promoters = data.data;
        this.setState({ promoters });
    });
}

  handleType=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  picture(){
    if(this.state.promoters[0].profile_pic = null){
      return <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"></img>
    }
  }
  

  render() {

    if( !this.state.promoters[0] ){
      return <div>Loading...</div>;
    }
    console.log(this.picture)
    return (

      <div>
        <div className="App App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>List Promoter</h2>
          <p>From</p>
        </div>
        {JSON.stringify(this.state.promoters[0])}
        <div className="container-fuild">
          <div className="row">
              <div className="col-md-4">
                  <div className="card-profil">
                  <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg"></img>
                      <p><i class="fab fa-instagram"></i> {this.state.promoters[0].instagram}</p>
                      <p><i class="fas fa-envelope"></i> {this.state.promoters[0].email}</p>
                      <p><i class="fas fa-mobile"></i> {this.state.promoters[0].phone_number}</p>
                  </div>
              </div>
              <div className="col-md-8">
                  <div className="card-profil">
                      {this.state.promoters[0].first_name} {this.state.promoters[0].last_name}
                      <div class="float-right">
                        <i class="fas fa-language"></i> {this.state.promoters[0].languages}
                        <i class="fas fa-city"></i> {this.state.promoters[0].city}
                      </div>
                      <hr></hr>
                      <h2>About Me</h2>
                      <hr></hr>
                      <p>{this.state.promoters[0].descriptions}.</p>
                      
                  </div>
              </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Listpromoter;
