import React, { Component } from 'react';
import macMockImg from '../img/macbooksvg.svg'
import ReactDOM from 'react-dom';
import { throttle } from 'lodash'

class MacVideoDemo extends Component {
  constructor(props){
    super(props)
    this.state = { showVideo: 'ios', mobile: (window.innerWidth < 700)}
  }

  componentDidMount() { 
    (this.props.playing == this.props.project) ? this.playVideo() : this.pauseVideo()
    if (this.state.mobile) {
        window.addEventListener('scroll', throttle(this._handleScroll.bind(this), 200))  
    }
  }
  _handleScroll(){
    console.log('scrollhandle')
    let topPosition = ReactDOM.findDOMNode(this.refs.vidRef).getBoundingClientRect().top
      if ( topPosition < 400 && topPosition > -100) {
            this.playVideo()
      } else {
          this.pauseVideo()
      }
  }

  componentDidUpdate() {
      if (!this.state.mobile) {
        (this.props.playing == this.props.project) ? this.playVideo() : this.pauseVideo()
      }
  }
  changeVideo(os) {
        (os === 'android') ?  this.setState({showVideo: 'android'}) :  this.setState({showVideo: 'ios'})
  }
  playVideo() {
    this.refs.vidRef.play()
  }

  pauseVideo() {
      this.refs.vidRef.pause()
  }
  
  render() {
    return (
        <div className="big-project-media-container">
            <div className="big-project-video-div" >
            <video playsInline={true} ref="vidRef"  className="big-project-video" height="360" width="620"  muted loop={true} autoPlay>
            <source src={this.props.MacVideoUrl} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
        </div>
    );
  }
}

const styles = {
    macMockImg : {
        width: '80%',
        height: 417,
        background: `url(${macMockImg}) no-repeat top transparent`,
        backgroundSize: '100%',   
    }
}

export default MacVideoDemo;
