import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeData } from '../actions/simpleAction'
import Header from "./Header";
import ContentArea from "./ContentArea";
import Spinner from './Spinner'
import Footer from './Footer'

class About extends Component {

  componentDidMount(){
    this.props.getHomeData()
  }

  displayData(){
    const homeData = this.props.contentReducer.result
    let pageData
    homeData.forEach(page => {
      if(page.id === 19){
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

export default connect(mapStateToProps, { getHomeData })(About);