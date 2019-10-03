import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import { connect } from 'react-redux'
import MediPlayer from './MediaPlayer'

const styles = {
  appBar: {
    position: 'relative',
    backgroundColor: '#323232!important',
    color: '#323232',
    boxShadow: 'none'
  },
  flex: {
    flex: 1,
  },
  image: {
      width: '100%',
      maxWidth: '800px'
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
    
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const sermonInfo = this.props.sermonInfo
    const { classes } = this.props;
    
    return (
      <div>
        <i className="material-icons play-icon" onClick={this.handleClickOpen}>headset</i><br/>Listen
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
          className="modalBody"
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.flex}>
              </Typography>
              <Button color="inherit" onClick={this.handleClose} className="sermon-modal-close">
                <CloseIcon />
              </Button>
            </Toolbar>
          </AppBar>
          {/* <div style={backgroundImage} className="modalBodyImage"></div> */}
          <div className="media-container">
            <div>
                <h1>{ sermonInfo.title }</h1>
                <MediPlayer 
                    mediaFile={sermonInfo.download_url} 
                    posterImage={sermonInfo.thumbnails.large}
                    speaker={sermonInfo.speaker}
                    sermonDate={sermonInfo.date_string}
                />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    ...state
  })

export default connect(mapStateToProps, { } )(withStyles(styles)(FullScreenDialog))
