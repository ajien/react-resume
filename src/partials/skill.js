import React, { Component } from 'react';

class Skill extends Component {

  render() {

    return (    
            
        <div className="item col-xs-12 col-sm-4">
            <div className="item-inner">
                <div className="chart-easy-pie text-center no-print">
                    <div className="chart-theme-1 chart" data-percent={this.props.item.score} >
                        <span>{this.props.item.score}</span>%
                    </div>
                </div>
                <h4 className="skill-name">{this.props.item.skill}</h4>
                <div className="level">{this.props.item.level}</div>
                <div className="desc">{this.props.item.description}</div>
            </div>
        </div>
        
    );
  }
}

export default Skill;