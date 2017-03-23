import React, { Component } from 'react';
import Experience from './experience.js';
import data from '../data/data.json';

/* eslint-disable */

class Experiences extends Component {
    
    renderExperiences() {
        let resultsArray = [];
        data.experiences.map((item, i) => {
            resultsArray.push(<Experience item={item} key={i} />);
        });
            
        return resultsArray;
    }
        
  render() {

    return (
    <div id="experiences-section" className="experiences-section section">
        <h2 className="section-title">Work Experiences</h2>
        
        <div className="timeline">    
            { this.renderExperiences() }
        </div>
    </div>
    );
  }
}

export default Experiences;