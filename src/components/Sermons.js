import React, { Component } from 'react'
import { getSermons } from '../actions/simpleAction'
import { connect } from 'react-redux';
import Spinner from './Spinner';
import SermonCard from './SermonCard'

import Grid from '@material-ui/core/Grid';
import Footer from './Footer'

class Sermons extends Component {

    componentDidMount(){
        this.props.getSermons()
    }

    getSermonData(){
        const sermons = this.props.sermonReducer.result.media
        return sermons.map(sermon => {
           return <Grid key={sermon.id} item xs={12} sm={12} md={6} lg={4}><SermonCard sermon={sermon}/></Grid>
        })
    }

    render() {

        return (
            this.props.sermonReducer.result === undefined   
            ? <Spinner/>
            :<div>
                <div className="container">
                    <Grid container spacing={24}>
                        { this.getSermonData() }
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
  
export default connect(mapStateToProps, { getSermons })(Sermons);