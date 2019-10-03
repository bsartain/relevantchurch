import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { injectStripe } from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';

class CheckoutFormCustom extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.onToken = this.onToken.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    onToken = async (event, token) => {
        console.log('VALUE', this.state.value * 100);
        console.log('TOKEN', token.id)
        // event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
            <TextField
                id="outlined-name"
                label="Amount"
                value={this.state.name}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                className="amount-input"
            />
            <StripeCheckout
                token={this.onToken}
                stripeKey="pk_test_GZMXUFd31vA0QTDRURXPA4PJ"
            >
            <Button type="submit" className="give-btn">Give Custom Amount</Button>
            </StripeCheckout>
        </form>
      )
    }
  }

  export default injectStripe(CheckoutFormCustom);
  