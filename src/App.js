import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

import Nav from './components/Nav'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

import projects from './projects.json'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Projects projectsData={projects}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
