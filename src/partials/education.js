import React, { Component } from 'react';
import School from './school.js';
import data from '../data/data.json';

/* eslint-disable */

class Education extends Component {
    
    renderSchool() {
        let resultsArray = [];
        data.schools.map((item, i) => {
            resultsArray.push(<School item={item} key={i} />);
        });
            
        return resultsArray;
    }
        
  render() {

    return (
        <section id="education-section" className="education-section section">
            <h2 className="section-title">Education</h2>
        
            <div className="row">    
                { this.renderSchool() }
            </div>
        </section>    
    );
  }
}

export default Education;