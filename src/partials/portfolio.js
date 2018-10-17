import React, { Component } from 'react';
import Work from './work.js';
import data from '../data/data.json';

/* eslint-disable */

class Portfolio extends Component {
    
    renderPortfolio() {
        let resultsArray = [];
        data.portfolio.map((item, i) => {
            resultsArray.push(<Work item={item} key={i} />);
        });
            
        return resultsArray;
    }
        
  render() {
            
    return (
        
        <section id="portfolio-section" className="portfolio-section section">
            <header>
                <h2 className="section-title">Portfolio</h2>
                <p>Here are some of my past works. Most of my works were done for agencies, and I am thus not allowed to publicly display them on my portfolio. If you would like to see some of my other works, please <a href={'mailto: ' + data.email} > send me an email </a> and I will respond with a list of other projects that I worked on.</p>
            </header>
            
        
            
        
            <ul id="filters" className="filters clearfix  no-print">
                <li className="type active" data-filter="*">All</li>
                <li className="type" data-filter=".backend">Back-end</li>
                <li className="type" data-filter=".frontend">Front-end</li>
                <li className="type" data-filter=".wordpress">WordPress</li>
                <li className="type" data-filter=".joomla">Joomla</li>
                <li className="type" data-filter=".email">Email</li>
            </ul>

            <div className="items-wrapper isotope row">
                { this.renderPortfolio() }
            </div>

        </section>
            
    );
  }
}

export default Portfolio;