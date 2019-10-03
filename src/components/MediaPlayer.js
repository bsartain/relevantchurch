import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
import PropTypes from 'prop-types';
import CustomPlayPause from './CustomPlayPause'
import { rewindAudio, forwardAudio } from '../utilities'
import Grid from '@material-ui/core/Grid';

const {
    Duration
    , CurrentTime
    , SeekBar
} = controls
 
class MediaPlayer extends Component {

  render() {
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src={this.props.mediaFile} className="rewindAudio"/>
          </div>
          <div className="media-controls">
            <Grid container spacing={24}>
                <Grid item xs={6} sm={6} md={6} lg={6} className="modal-speaker-info">
                    <h3>{ this.props.speaker }</h3>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <h3>{ this.props.sermonDate }</h3>
                </Grid>
            </Grid>
            <div className="first-controls">
            <i className="material-icons replay-icon" onClick={() => rewindAudio()}>replay_10</i>
            <CustomPlayPause/>
            <i className="material-icons replay-icon" onClick={() => forwardAudio()}>forward_10</i>
            </div>
            <div className="second-controls">
                <Duration/> 
                <SeekBar/>
                <CurrentTime/>
            </div>
          </div>
        </div>
      </Media>
    )
  }
}

MediaPlayer.propTypes = {
    Volume: PropTypes.number,
    PlayPause: PropTypes.func,
    MuteUnmute: PropTypes.func,
    Duration: PropTypes.number,
    CurrentTime: PropTypes.number
  };

  PropTypes.oneOf(['youtube', 'vimeo', 'audio', 'video'])

export default MediaPlayer