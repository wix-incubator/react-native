import React, { Component } from 'react';
import logo from '../img/logo.png'
import dash from '../img/dash.png'

class Nav extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

        <div className="collapse navbar-collapse" id="jb-navbar-collapse">
          <img className="dash-image" src={dash}/>
          <a href="/"> <img className="main-logo" src={logo}/></a>
          <ul className="nav navbar-nav">
            <li><a className="nav-link" href="\#declerative">About</a></li>
            <li><a className="nav-link" href="\#projects">Projects</a></li>
            <li><a className="nav-link" href="http://www.wix.engineering/">Blog</a></li>
            <li><a className="nav-link" href="http://www.wix.engineering/">Wix Engineering</a></li>
          </ul>
        </div>

      </nav>
      </div>
    );
  }
}


export default Nav;
