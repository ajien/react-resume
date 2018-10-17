import React, { Component } from 'react';

class Skill extends Component {

  render() {
    const date = new Date();
    const curyear = date.getFullYear();

    return (    
            
        <div className="item col-xs-12 col-sm-4">
            <div className="item-inner">
                <div className="chart-easy-pie text-center no-print">
                    <div className="chart" data-percent={this.props.item.score} >
                        <span>{this.props.item.score}</span>%
                    </div>
                </div>
                <h4 className="skill-name">{this.props.item.skill}</h4>
                <div className="level">{this.props.item.level}, {curyear - this.props.item.start} years</div>
                <div className="desc">{this.props.item.description}</div>
            </div>
        </div>
        
    );
  }
}

export default Skill;