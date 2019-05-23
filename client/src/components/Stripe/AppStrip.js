import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class AppStripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_YpqN2iGyFTBArev63zpoW2dC00qkQ5COrW">
        <div className="container stripe">
          <h1 className="text-center">Why Become a promoter?</h1>
          <div className="row slideLeft why text-center">
            <div className="col-md-4">
              <h3>Manage your Dashboard</h3>
              <p>Owlz allows you, in a simple and secure way, to put your profile and start to grab some user. You have complete control over your availability, your prices, your rules of procedure and your interaction with the owlz communities.</p>
            </div>
            <div className="col-md-4">
              <h3>Verified Guests</h3>
                <p>Owlz always requires guests to confirm certain information before making a reservation, including their phone number and e-mail address...For even more security, you can chat with them directly with our chat tools to ask them any information you need.</p>
            </div>
            <div className="col-md-4">
              <h3>business portfolio</h3>
                <p>Increase and develope your Buissness. we offer you our guests database for only <b>$20</b>.</p>
            </div>
          </div>
          <Elements>
            <CheckoutForm logingInPromoter={this.props.logingInPromoter} onRegister={this.props.onRegister} onSubmit={this.props.onSubmit}/>
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default AppStripe;