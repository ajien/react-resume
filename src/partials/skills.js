import React, { Component } from 'react';
import Skill from './skill.js';
import data from '../data/data.json';

/* eslint-disable */

class Skills extends Component {
    
    renderSkills() {
        let resultsArray = [];
        data.skills.map((item, i) => {
            resultsArray.push(<Skill item={item} key={i} />);
        });
            
        return resultsArray;
    }
                        
    renderOtherSkills() {
        let resultsArray = [];
        data.otherskills.map((item, i) => {
            resultsArray.push(<span className="skill-tag" key={i}>{item}</span>);
        });
            
        return resultsArray;
    }
        
  render() {
            
    return (
        
        <section id="skills-section" className="skills-section section text-center">
            <h2 className="section-title">Professional Skills</h2>
            <div className="top-skills">
                <h3 className="subtitle">Top Skills</h3>
                <div className="row">
                    { this.renderSkills() }
                </div>
            </div>


            <div className="other-skills">
                <h3 className="subtitle">Other Skills</h3>
                <div className="misc-skills">
                    { this.renderOtherSkills() }
                </div>
            </div>

        </section>
            
    );
  }
}

export default Skills;