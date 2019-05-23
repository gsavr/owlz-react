import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import RegisterPromoter from '../pages/Login/registerPromoter';
import './stripe.css'
import Image from '../images/stripe.png'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""}
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: this.state.name});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
    if (response.ok) this.setState({complete: true});
  }

  handleType = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    if (this.state.complete) return <div><h1>Purchase Complete</h1>
      <RegisterPromoter logingInPromoter={this.props.logingInPromoter} onRegister={this.props.onRegister} onSubmit={this.props.onSubmit}/></div>;
    return (
      <div className="row">
        <div className="col-md-6 slideRight">
          <h2 className="text-center">The Most Secure way</h2>
          <div className="image-secure">
            <img src={Image} alt="Logo" />
          </div>
        </div>
        <div className="col-md-6 slideLeft">
          <div className="checkout">
              <h2>Become Promoter for $20 only!</h2>
              <div className="form-group">
                <label htmlFor="InputFirstname">Full Name</label>
                <input onChange={this.handleType} name="name" type="text" className="form-control" id="InputName" placeholder="Full Name" />
            </div>
            <div className="form-group">
                <label htmlFor="InputFirstname">Credit Card</label>
                <CardElement />
            </div>
              <button className="btn-login" onClick={this.submit}>Send</button>
            </div>
          </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);