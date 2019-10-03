import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
 
class CustomPlayPause extends Component {
  
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }
 
  _handlePlayPause = () => {
    this.props.media.playPause()
  }
 
  render() {
    const { style, media } = this.props
    return (
      <i
        type="i"
        className={'material-icons play-pause'}
        style={style}
        onClick={this._handlePlayPause}
      >
        {media.isPlaying ? 'pause_circle_outline' : 'play_circle_outline'}
      </i>
    )
  }
}
 
export default withMediaProps(CustomPlayPause)