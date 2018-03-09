import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from './../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Feedback Collector"
        description="$5 for 5 email credits"
        amount={500} // amount is in cents
        token={ // callback function to be executed after the Stripe API returns a token
          (token) => {
            this.props.handleToken(token);
          }
        }
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn">
          Add credits
        </button>
      </StripeCheckout>
    );
  }
};

export default connect(null, actions)(Payments);
