import React, {Component} from 'react';
import {injectStripe} from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';
import Button from '@material-ui/core/Button';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        complete: false
      };
  }

  onToken = async (token) => {
    const stripeObj = JSON.stringify({
      stripeToken: token.id,
      stripeAmount: this.props.amount * 100
    })
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: stripeObj
    });
  
    if (response.ok) console.log("Purchase Complete!")
    if (response.ok) this.setState({complete: true});
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout">
        <StripeCheckout
          token={this.onToken}
          amount={this.props.amount * 100}
          stripeKey="pk_test_GZMXUFd31vA0QTDRURXPA4PJ"
          label={`Give $${this.props.amount}`}
          name="Relevant Church"
          description="Thank you for partnering with us"
          image="https://stripe.com/img/documentation/checkout/marketplace.png"
          ComponentClass="div"
          panelLabel="Donate"
          currency="USD"
          allowRememberMe
        >
        <Button variant="contained" size="large" className="give-btn">
          Give ${ this.props.amount }.00
        </Button>
        </StripeCheckout>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);