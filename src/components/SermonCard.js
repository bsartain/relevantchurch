import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'



const styles = theme => ({
  card: {
    maxWidth: '100%',
    minHeight: '302px',
    background: 'none',
    color: '#f2f2f2'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  pointer: {
    cursor: 'pointer'
  }
});

class SermonCard extends React.Component {

    selectedSermon(id){
        this.props.history.push(`/sermon-single/${id}`);
        window.scroll(0, 0)
    }

  state = { expanded: false };

  render() {
    const { classes } = this.props;
    const details = `${this.props.sermon.speaker}  |  ${this.props.sermon.date_string}`
    return (
      <Card className={`${classes.card} ${classes.pointer}`} onClick={() => this.selectedSermon(this.props.sermon.id)}>
        <CardMedia
          className={classes.media}
          image={this.props.sermon.thumbnails.large}
          title={this.props.sermon.title}
        />
        <CardHeader
          className='sermon-card-title'
          title={this.props.sermon.title}
          subheader={ details }
        />
      </Card>
    );
  }
}

SermonCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    ...state
  })

export default withRouter(connect( mapStateToProps, { } )(withStyles(styles)(SermonCard)))
