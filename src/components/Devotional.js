import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDailyDevotional } from '../actions/simpleAction';
import Header from "./Header";
import ContentArea from "./ContentArea";
import Spinner from './Spinner';
import Footer from './Footer'

class Devotional extends Component {

  componentDidMount(){
    this.props.getDailyDevotional()
  }

  getTodaysDate(){
    var date = new Date()
    var yyyy = `2004-`
    var mm = `${("0" + (date.getMonth() + 1)).slice(-2)}-`
    var dd = `${("0" + date.getDate()).slice(-2)}T00:00:00`
    var formattedDate = yyyy+mm+dd
    return formattedDate
  }

  displayData(){
    const devotionalData = this.props.dailyDevotionReducer.result
    const todaysDate = this.getTodaysDate()

    let pageData
    devotionalData.forEach(page => {
      if(page.date === todaysDate){
        pageData =
          <div className="page-container-class">
            <Header headerData={ page } /> 
            <ContentArea contentData={ page } className="container"/> 
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
          this.props.dailyDevotionReducer.result === undefined
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

export default connect(mapStateToProps, { getDailyDevotional })(Devotional);