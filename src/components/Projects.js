import React, { Component } from 'react';
import androidImage from '../img/android-camera.png'
import appStoreBadge from '../img/app-store-badge.svg'
import playStoreBadge from '../img/google-play-badge.svg'
import VideoDemo from './VideoDemo.js'
import ProjectImage from './ProjectImage'
import MacVideoDemo from './MacVideoDemo'

const ProjectsDemoAppLink = ({p}) => (
        <div className="project-demoapp-links-container"> 
            {(p.AndroidDemoAppLink || p.IOSDemoAppLink) && <div className="download-demo-title-container"><h5 className="download-demo-title"> Download Demo </h5></div>}
            {p.IOSDemoAppLink && <a className="project-demoapp-link" href={p.IOSDemoAppLink}><img className="project-demoapp-img" src={appStoreBadge}></img></a>}
            {p.AndroidDemoAppLink && <a className="project-demoapp-link" href={p.AndroidDemoAppLink}><img className="project-demoapp-img" src={playStoreBadge}></img></a>}
        </div>  
    )


class Projects extends Component {
  constructor(props){
    super(props)
    this.state = {width: window.innerWidth, playing: this.props.projectsData.projectList[0]}
    console.log(this.props.projectsData.projectList[0])
    window.addEventListener("orientationchange", this.updateStateOnOrientation.bind(this))
  }
  switchVideo(project){
        console.log(project)
        this.setState({playing: project})
  }

  updateStateOnOrientation(){
    console.log('orientation change')
    this.setState({width: window.innerWidth})
  }

  render() {
    return (
       <section className="projects-container">
           {this.props.projectsData.projectList.map(project => {
               let p = this.props.projectsData[project];
               if (p.size == 'normal') {
               return (
                   <div onMouseEnter={() => this.switchVideo(project)} key={project} className="project">
                        <div className='project-text-container'>
                        <h2 className="project-title">{p.title}</h2>
                        <p className="project-description">{p.description}</p>
                        <div className="project-github-link-div"><a className="project-github-link" href={p.github}>GitHub </a></div>
                         {(this.state.width > 700) && <ProjectsDemoAppLink p={p}/>}
                        </div> 
                        {(p.AndroidVideoUrl || p.IOSVideoUrl) && <VideoDemo project={project} size="normal" poster={p.poster} playing={this.state.playing} AndroidVideoUrl={p.AndroidVideoUrl} IOSVideoUrl={p.IOSVideoUrl}/>}
                        {(p.Image && (!(p.AndroidVideoUrl || p.IOSVideoUrl))) && <ProjectImage/>}
                        {(this.state.width <= 700) && <ProjectsDemoAppLink p={p}/>}
                    </div>
               )} else if (p.size === 'big') { return (
                   <div onMouseEnter={() => this.switchVideo(project)} key={project} className="big-project">
                        <div className='big-project-text-container'>
                        <h2 className="project-title">{p.title}</h2>
                        <p className="project-description">{p.description}</p>
                        <div className="project-github-link-div"><a className="project-github-link" href={p.github}>GitHub </a></div>
                         {(this.state.width > 700) && <ProjectsDemoAppLink p={p}/>}
                        </div> 
                        <MacVideoDemo  project={project} poster={p.poster} playing={this.state.playing} MacVideoUrl={p.MacVideoUrl}/>
                        {(this.state.width <= 700) && <ProjectsDemoAppLink p={p}/>}
                    </div>)
               }
           })}
       </section>
    );
  }
}

export default Projects;
