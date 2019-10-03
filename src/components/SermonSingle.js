import React, { Component } from 'react'
import { getSermons } from '../actions/simpleAction'
import { connect } from 'react-redux'
import Spinner from './Spinner'
import Footer from './Footer'
import SermonCard from './SermonCard'
import Modal from './Modal'

import Grid from '@material-ui/core/Grid';


class SermonSingle extends Component {

    componentDidMount(){
        this.props.getSermons()
    }

    getSermonInfo(){
        const props = this.props.sermonReducer.result.media
        const getFilterTitle = props.filter(sermon => sermon.id === parseInt(this.props.match.params.id))
        const getSeriesInfo = getFilterTitle[0]
        return getSeriesInfo
    }

    singleSermonHeader(){
        const sermonInfo = this.getSermonInfo()

        const sectionStyle = {
            backgroundImage: `url(${sermonInfo.thumbnails.large})`
        };
       return  <div className="sermon-single-container-header" style={sectionStyle}>
                    <div className="single-sermon-overlay"></div>
                </div>
    }

    singleSermonContent(){
        const sermonInfo = this.getSermonInfo()
        
        return <div className="sermon-single-container-content">
                    <div>
                        <h2>{ sermonInfo.title }</h2>
                        <h3>{ sermonInfo.speaker }</h3>
                        <h3>{ sermonInfo.date_string }</h3>
                        <div>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Modal sermonInfo={sermonInfo}/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
    }

    singleSermonSeries(){
        const seriesInfo = this.props.sermonReducer.result.media
        const getFilterTitle = seriesInfo.filter(sermon => sermon.id === parseInt(this.props.match.params.id))
        const getSeriesTitle = getFilterTitle[0].series
        const filteredSeriesTitles = seriesInfo.filter(sermon => sermon.series === getSeriesTitle)

        if(filteredSeriesTitles === undefined){
            return <Spinner />
        } else {
            return filteredSeriesTitles.map(sermon => {
                return <Grid key={sermon.id} item xs={12} sm={12} md={6} lg={4}><SermonCard sermon={sermon}/></Grid>          
             })
        }
    }

    render() {
        return (
            !this.props.sermonReducer.result
                ? <Spinner />
                : <div>
                    { this.singleSermonHeader() }
                    { this.singleSermonContent() }
                    <div className="container-single">
                        <hr/>
                        <h2>More from this series: { }</h2>
                        <Grid container spacing={24}>
                            { this.singleSermonSeries() }
                        </Grid>
                    </div>
                    <Footer/>
                </div>
        )
    }
}
 

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps, { getSermons })(SermonSingle);