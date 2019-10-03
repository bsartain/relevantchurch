import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeData } from '../actions/simpleAction'
import Header from "./Header";
import Footer from './Footer'
import ContentArea from "./ContentArea";
import Spinner from './Spinner'
import PageSections from './PageSections'

import Grid from '@material-ui/core/Grid';

class Home extends Component {

  componentDidMount(){
    this.props.getHomeData()
  }

  displayData(){
    const homeData = this.props.contentReducer.result
    let pageData
    homeData.forEach((page, index) => {
      if(page.id === 7){
        pageData =
          <div key={index} className="page-container-class">
            <Header headerData={ page } /> 
            <ContentArea contentData={ page } className="container"/> 
            <div className="service-info">
              <Grid container spacing={24}>
                <Grid key={page.id} item xs={12} sm={12} md={6} lg={6}>
                  <h1>Gather with us this Sunday</h1>
                  <p>Sundays @ 10:30am<br/>
                  Csd YMCA Aquatic Center<br/>
                  5485 Charlotte Highway
                  Lake Wylie, SC 29710</p>
                </Grid>
                <Grid key={page.id} item xs={12} sm={12} md={6} lg={6}>
                  <h1>Child Care</h1>
                  <p>*Nursery and kids programs are available during worship times. Be sure to come a little early to get your child(ren) checked in at our KidCheck station.</p>
                </Grid>
              </Grid>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.9480658896728!2d-81.09285788436847!3d35.10800768033183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885693ccea1f6015%3A0x5996baf7d11f5c8a!2s5485+Charlotte+Hwy%2C+Clover%2C+SC+29710!5e0!3m2!1sen!2sus!4v1545015485853" title="Relevant Church" width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
            <PageSections/>
            <Footer />
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
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, { getHomeData })(Home);