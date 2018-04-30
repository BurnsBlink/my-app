import React, { Component } from "react";
import { Document } from 'react-pdf';

class Home extends React.Component {
  render() {
    return (
      <div className="f">
        <div className="header">
          <img className="my-face" src={require('./images/sb1.png')} alt=""/>
        </div>

        <div className="contact-holder">
          <h1 className="large-6 medium-6 small-12 text-center columns name">Sam Burns</h1>

          <div className="large-6 medium-6 small-12 text-center columns">
            <p className="number">607-592-9072</p>
            <p className="email">samuel.burns.25@gmail.com</p>
            <a className="linkedin" href="https://www.linkedin.com/in/samuel-burns/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br /><br />
            <a className="github" href="https://github.com/BurnsBlink" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <Document file="resume.pdf" />

      </div>
    );
  }
}

export default Home
