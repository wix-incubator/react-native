import React, { Component } from 'react';
import androidBlog from '../img/iphone-mock.png'

class ProjectImage extends Component {
  constructor(props){
    super(props)
 }

  render() {
    return (
       <div className="project-image-container">
           <img className="project-image" src={this.props.source}/>
       </div>
    );
  }
}

export default ProjectImage;
