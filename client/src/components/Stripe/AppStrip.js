import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class AppStripe extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_YpqN2iGyFTBArev63zpoW2dC00qkQ5COrW">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default AppStripe;