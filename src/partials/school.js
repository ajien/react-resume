import React, { Component } from 'react';

class School extends Component {

  render() {

    return (
        
        <div className="item col-xs-12 col-sm-4">
            <div className="item-inner">
                <h3 className="degree">{this.props.item.degree}</h3>
                <div className="education-body">
                    {this.props.item.school}
                </div>
                <div className="time">{this.props.item.period}</div>
                <div className="desc">{this.props.item.description}</div>
            </div>
        </div>
        
    );
  }
}


export default School;