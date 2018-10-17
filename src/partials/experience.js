/* eslint-disable */

import React, { Component } from 'react';
import Accomplishment from './accomplishment.js';

import data from '../data/data.json';

class Experience extends Component {
    
    renderAccomplishments() {
        let resultsArray = [];
   
        data.experiences.map((item, i) => {
            resultsArray.push(<Accomplishment data={item.accomplishments} key={i} />);
        });
            
        return resultsArray;
    }
                   
  render() {

    const accomplishments = this.props.item.accomplishments;

        return (
        
            <div className="item">
                <div className="work-place">
                    <h3 className="place">{this.props.item.company}</h3>
                    <div className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>{ this.props.item.location }</div>
                </div>
                <div className="job-meta">
                    <div className="title">{ this.props.item.title }</div>
                    <div className="time">{ this.props.item.time }</div>
                </div>
                <div className="job-desc" dangerouslySetInnerHTML={ { __html: this.props.item.description } }></div>
            
                { accomplishments &&
                    <div className="job-accomplishments" >
                        <h4 className="accomplishments">Accomplishments</h4>
                        <Accomplishment data={this.props.item.accomplishments} />
                    </div>
                }

            </div>
            
        );
  }
}


export default Experience;