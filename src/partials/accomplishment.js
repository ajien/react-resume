/* eslint-disable */

import React, { Component } from 'react';

class Accomplishment extends Component {
    
    renderAccomplishment() {
        let resultsArray = [];
           
        this.props.data.map((el, index) => {
            resultsArray.push(<li key={index} >{el}</li>);
        });
            
        return resultsArray;
    }

  render() {

    return (    
        <ul>
            { this.renderAccomplishment() }
        </ul>
    );
  }
}

export default Accomplishment;