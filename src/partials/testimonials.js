import React, { Component } from 'react';
import Testimonial from './testimonial.js';
import data from '../data/data.json';

/* eslint-disable */

class Testimonials extends Component {
    
    renderTestimonials() {
        let resultsArray = [];
        data.testimonials.map((item, i) => {
            resultsArray.push(<Testimonial item={item} key={i} />);
        });
            
        return resultsArray;
    }
        
  render() {
            
    return (
        
        <section id="testimonials-section" className="testimonials-section section">
            <h2 className="section-title">Testimonials</h2>

            <div id="testimonials-carousel" className="testimonials-carousel carousel slide" data-interval="8000">

                <ol className="carousel-indicators  no-print">
                    <li data-target="#testimonials-carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#testimonials-carousel" data-slide-to="1"></li>
                    <li data-target="#testimonials-carousel" data-slide-to="2"></li>
                    <li data-target="#testimonials-carousel" data-slide-to="3"></li>
                </ol>

                <div className="carousel-inner">
                    { this.renderTestimonials() }
                </div>
            </div>
        </section>
            
    );
  }
}

export default Testimonials;