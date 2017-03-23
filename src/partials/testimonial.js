import React, { Component } from 'react';

class Testimonial extends Component {

  render() {

    return (
        
        <div className={'item ' + this.props.item.active} >
            <blockquote className="quote">
                <i className="fa fa-quote-left"></i>
                <p>{this.props.item.description}</p>
            </blockquote>
            <div className="source">
                <div className="name">{this.props.item.client}</div>
                <div className="position">{this.props.item.location}</div>
        
            </div>
        </div>
        
    );
  }
}

export default Testimonial;