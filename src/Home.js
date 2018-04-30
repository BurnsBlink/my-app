import React, { Component } from "react";
import { Document, Page } from 'react-pdf';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1,
      showDoc: null,
    }
    this.handleShowClick = this.handleShowClick.bind(this);
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  handleShowClick(event){
    if (this.state.showDoc === event) {
      this.setState({ showDoc: null})
    } else {
      this.setState({ showDoc: true })
    }
  }


  render() {
    const { pageNumber, numPages } = this.state;

    let className, id, msg
    if (this.state.showDoc === true){
      className = "doc-show"
      id = "button-hide"
      msg = "*** Click to hide my Resume ***"
    } else {
      className = "doc-hide"
      id = "button-show"
      msg = "*** Click to see my Resume ***"
    }

    let onClick = () => {
      this.handleShowClick(true)
    }

    return (
      <div>
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

        <p onClick={onClick} className="large-12 text-center resume-button" id={id}>
          {msg}
        </p>

        <Document className={className} file="resume.pdf" onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default Home
