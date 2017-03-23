/* eslint-disable */

import React, { Component } from 'react';
import data from '../data/data.json';

class FooterContactInfo extends Component {
    
    renderServices() {
        let resultsArray = [];
        data.services.map((item, i) => {
            resultsArray.push(<li key={i}><i className="fa fa-check" aria-hidden="true" ></i> {item}</li>);
        });
            
        return resultsArray;
    }
    
  render() {
    return (
        
        <section id="contact-section" className="contact-section section no-print">
            <h2 className="section-title">Get in Touch</h2>
            <div className="intro">
                <img className="profile-image" src={data.photo} alt="" />
        
                <div className="dialog">
                    <p>{data.dialog}</p>
        
                    <p><strong>I can help with the following:</strong></p>
        
                    <ul className="list-unstyled service-list">
                        { this.renderServices() }
                    </ul>
        
                    <p>Drop me a line at <a href={'mailto:' + data.email} >{data.email}</a> or call me at <a href={'tel:' + data.phone}>{data.phone}</a></p>
        
                    <ul className="social list-inline">
                        <li><a href={data.linkedin}><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
        
                        <li><a href={data.facebook}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
        
                        <li><a href={'mailto:' + data.email}><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
        
                        <li><a href={'skype:' + data.skype}><i className="fa fa-skype" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
        
    );
  }
}

export default FooterContactInfo;