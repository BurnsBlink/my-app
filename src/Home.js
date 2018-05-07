import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { Fade } from "react-slideshow-image";
import Moment from 'react-moment';
import SlideShow from 'react-image-show';

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

  day_of_the_month = (d) => {
    let days = d.getDate();
    if(days > 10 ) return days;
    return "0" + days;
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
    const projectImages = [
      "constants/projects/flipdog.png",
      "constants/projects/hov.png",
      "constants/projects/925.png",
      "constants/projects/biod.png"
    ];
    const logoImages = [
      "constants/logos/BBsite.jpg",
      "constants/logos/hov.jpg",
      "constants/logos/flipdog.jpg",
      "constants/logos/guys.jpg",
      "constants/logos/Lakewood.jpg",
      "constants/logos/Media.jpg",
      "constants/logos/mylogo.jpg",
      "constants/logos/Shield.jpg",
      "constants/logos/Thunderlogo.jpg"
    ];

    let today = new Date();
    let day = this.day_of_the_month(today);
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = monthNames[today.getMonth()];
    let year = today.getFullYear();

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
          <img className="my-face" src={require("./images/sb1.png")} alt=""/>
          <p className="month">{month}</p>
          <p className="day">{day}</p>
          <p className="year">{year}</p>
          <Moment className="time" format="hh:mm:ss" interval={500}>
          </Moment>
        </div>

        <div className="contact-holder">
          <h1 className="large-6 medium-6 small-12 text-center columns name">Sam Burns</h1>
          <span className="large-6 medium-6 small-12 text-center columns">
            <p className="number">607-592-9072</p>
            <p className="email">samuel.burns.25@gmail.com</p>
            <p><a className="linkedin" href="https://www.linkedin.com/in/samuel-burns/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a className="github" href="https://github.com/BurnsBlink" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </span>
        </div>

        <div className="row my-bio">
          <p className="columns bio-text">&emsp;Born in Pennsylvania, raised in California, grew up in New York, educated in Pennsylvania, career aspirations in Massachusetts, settled in Maryland.  Switching careers from a business/finance background to the world of Web Development was the most challenging thing I’ve done in my life.  It has also been one of my best decisions I could’ve ever made.<br/><br/>
          &emsp;I’m a huge comic book fan (obviously *TODO link here*), love just about any sport, and also like to read up on many kinds of tech.</p>
        </div>

        <div>
          <p onClick={onClick} className="large-12 text-center resume-button" id={id}>
            {msg}
          </p>
          <Document className={className} file="resume.pdf" onLoadSuccess={this.onDocumentLoad}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

        <div className="text-center projects-holder">
          <h1 className="columns project-title">{"Here are some projects that I've worked on"}</h1>
          <span className="">
            <a className="project-path" href="https://flipdog.herokuapp.com" target="_blank" rel="noopener noreferrer">Flipdog</a>
            <a className="project-path" href="https://house-of-vikings.herokuapp.com" target="_blank" rel="noopener noreferrer">House of Vikings</a>
            <a className="project-path" href="https://ninetofiveguys.herokuapp.com" target="_blank" rel="noopener noreferrer">9 to 5 Guys</a>
            <a className="project-path" href="https://biodiversity.herokuapp.com" target="_blank" rel="noopener noreferrer">Biodiversity Lab</a>
          </span>
        </div>

        <div className="project-container">
          <span className="project-to-images">
            <Fade
              images={projectImages}
              duration={1500}
              transitionDuration={1000}
              direction="in"
              />
          </span>
        </div>

        <div className="logo-container">
          <h2 className="text-center logo-title">{"I also love to build logos in my free time"}</h2>
          <SlideShow
            images={logoImages}
            width="520px"
            imagesWidth="500px"
            imagesHeight="250px"
            imagesHeightMobile="56vw"
            thumbnailsWidth="520px"
            thumbnailsHeight="12vw"
            infinite="true"
            indicators thumbnails fixedImagesHeight
          />
        </div>
      </div>
    );
  }
}

export default Home

// <img className="large-3 medium-4 small-12 text-center columns bio-img" src="/constants/gambit.png" alt=""></img>
