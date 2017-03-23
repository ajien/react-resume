import React, { Component } from 'react';

class PageNav extends Component {
  render() {
    return (
        <div className="page-nav-space-holder hidden-xs">
            <div id="page-nav-wrapper" className="page-nav-wrapper text-center">
                <div className="container">
                    <ul id="page-nav" className="nav page-nav list-inline">
                        <li><a className="scrollto" href="#experiences-section">Experiences</a></li>
                        <li><a className="scrollto" href="#education-section">Education</a></li>
                        <li><a className="scrollto" href="#skills-section">Skills</a></li>
                        <li><a className="scrollto" href="#testimonials-section">Testimonials</a></li>
                        <li><a className="scrollto" href="#portfolio-section">Portfolio</a></li>
                        <li><a className="scrollto" href="#contact-section">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default PageNav;