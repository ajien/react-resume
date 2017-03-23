import React, { Component } from 'react';
import Experiences from './experiences.js';
import Education from './education.js';
import Skills from './skills.js';
import Testimonials from './testimonials.js';
import Portfolio from './portfolio.js';
import FooterContactInfo from './footer-contactinfo.js';


class MainWrapper extends Component {
  render() {
    return (
        <div className="wrapper container">
            <Experiences />
            <Education />
            <Skills />
            <Testimonials />
            <Portfolio />
            <FooterContactInfo />
        </div>
    );
  }
}



export default MainWrapper;