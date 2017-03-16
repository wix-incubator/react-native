import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import androidMock from '../img/android.png'
import iphoneMock from '../img/iphone.png'
import androidIcon from '../img/android-black-icon.svg'
import iphoneIcon from '../img/apple-black-icon.svg'
import poster from '../img/react-native-navigation-poster.jpg'
import { throttle } from 'lodash'

class VideoDemo extends Component {
  constructor(props){
    super(props)
    this.state = { showVideo: 'ios', mobile: (window.innerWidth < 740), playing: false, scrollPosition: 0}
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
      if (this.state.mobile) {
          this.playVideo()
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
  
  renderIOSDemo() {
      return (
        <div className="project-video-div" style={(this.state.showVideo === 'ios') ? styles.iphoneMockImg : styles.androidMockImg}>
            <video playsInline={true} src={(this.state.showVideo === 'ios') ? this.props.IOSVideoUrl : this.props.AndroidVideoUrl} ref="vidRef" className={(this.state.showVideo === 'ios') ? "project-video-iphone" : "project-video-android"} poster={this.props.poster} height="320" width="180"  muted loop={true} >
            {/*<source src={(this.state.showVideo === 'ios') ? this.props.IOSVideoUrl : this.props.AndroidVideoUrl} type="video/mp4"/>*/}
                Your browser does not support the video tag.
            </video>
        </div>
      )
  }
  renderAndroidDemo() {
      return (
          <div  className="project-video-div" style={styles.androidMockImg}>
            <video playsInline={true} ref="vidRef"  className="project-video-android" height="320" width="180"  poster={this.props.poster} muted loop={true} >
            <source src={this.props.AndroidVideoUrl} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
          </div>
      )
  }
  render() {
    return (
        <div className="project-media-container">
            {(this.props.IOSVideoUrl) ? this.renderIOSDemo() :this.renderAndroidDemo()}
            {}
            {(this.props.AndroidVideoUrl && this.props.IOSVideoUrl)  && 
            <div className="project-icons-container">
                 <img className="apple-icon" onClick={() => this.changeVideo('ios')} style={(this.state.showVideo === 'android') ? {opacity: 0.4} : {opacity: 1}} src={iphoneIcon} />  
                 <img className="android-icon" onClick={() => this.changeVideo('android')} style={(this.state.showVideo === 'ios') ? {opacity: 0.4} : {opacity: 1}} src={androidIcon} />
            </div> }
        </div>
    );
  }
}

const styles = {
    iphoneMockImg : {
        width: 243,
        height: 426,
        background: `url(${iphoneMock}) no-repeat top transparent`   
    },
    androidMockImg: {
        width: 243,
        height: 426,
        background: `url(${androidMock}) no-repeat top  transparent`
    }
}

export default VideoDemo;
