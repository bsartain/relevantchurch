import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeData } from '../actions/simpleAction';
import Header from "./Header";
import ContentArea from "./ContentArea";
import Spinner from './Spinner';
import Footer from './Footer';

import RefTagger from './RefTagger'

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import CheckoutFormCustom from './CheckoutFormCustom';

class Give extends Component {

  componentDidMount(){
    this.props.getHomeData()
  }

  setCheckoutBtn(){
    return [25, 50, 100, 150, 200, 500, 1000].map((amt, index) => {
      return <CheckoutForm key={index} amount={amt}/>
    })
  }

  displayData(){
    const homeData = this.props.contentReducer.result
    let pageData
    homeData.forEach(page => {
      if(page.id === 53){
        pageData =
          <div className="page-container-class">
            <Header headerData={ page } /> 
            <ContentArea contentData={ page } className="container"/>
              <StripeProvider apiKey="pk_test_GZMXUFd31vA0QTDRURXPA4PJ">
                <div className="container">
                  <Elements>
                    <div className="give-btn-container">
                      { this.setCheckoutBtn() }
                      <CheckoutFormCustom/>
                    </div>
                  </Elements>
                </div>
              </StripeProvider>
            <Footer/>
          </div> 
      }
    })
    return pageData
  }

  render() {
    return (
      <div className="page-container-class">
        {
          this.props.contentReducer.result === undefined
            ? <Spinner />
            : this.displayData()
        }
        <RefTagger/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, { getHomeData })(Give);