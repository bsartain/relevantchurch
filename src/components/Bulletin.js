import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBulletinData } from '../actions/simpleAction';
import Spinner from './Spinner';

import RefTagger from './RefTagger'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import giveImage from'../images/give.png';
import { Link } from 'react-router-dom'

const styles = {
    card: {
      maxWidth: '100%',
    },
    media: {
      height: 140,
    },
  };

class Bulletin extends Component {

  componentDidMount(){
    this.props.getBulletinData()
  }
  

  displayBulletinData(){
    const { classes } = this.props;
    const bulletinData = this.props.bulletinReducer.result.events
    return bulletinData.map((info, index) => {
        return <Card key={index} className={classes.card}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={ info.image.url }
                        title="Relevant Church"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" dangerouslySetInnerHTML={{ __html: info.title }}/>
                        <div className="event-details">
                            <h3 className="event-date"><i className="material-icons date-icon">date_range</i>{ `${ info.start_date_details.month }/${ info.start_date_details.day }/${ info.start_date_details.year }` }</h3>
                            <h3 className="event-date"><i className="material-icons date-icon">place</i>{ info.venue.venue }</h3>
                            <h3 className="event-date"><i className="material-icons date-icon">access_time</i>{ `${info.start_date_details.hour}:${info.start_date_details.minutes}` }</h3>
                        </div>
                        <Typography component="p" dangerouslySetInnerHTML={{ __html: info.description }} />
                    </CardContent>
                    </CardActionArea>
                </Card> 
    });
  }

  getTodaysDate(){
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = date.getDate()
    const monthName = monthNames[date.getMonth()]
    return <div className="date">
                <span className="binds"></span>
                <span className="month">{ monthName }</span>
                <h1 className="day">{ today }</h1>
            </div>
  }

  render() {
    return (
      <div className="page-container-class">
        {
          this.props.bulletinReducer.result === undefined
            ? <Spinner />
            : <div className="bulletin-container">
                <div>
                    { this.displayBulletinData() }
                </div>
                <div>
                    { this.getTodaysDate() }
                    <Link to="/give"><img src={giveImage} className="give" alt="relevant Church"/></Link>
                </div>
              </div>
        }
        <RefTagger/>
      </div>
    )
  }
}
  

const mapStateToProps = state => ({
  ...state
})

export default connect( mapStateToProps, { getBulletinData } )(withStyles(styles)(Bulletin))