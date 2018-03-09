import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500} // amount is in cents
        token={ // callback function to be executed after the Stripe API returns a token
          (token) => {
            console.log(token);
          }
        }
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      />
    );
  }
};
