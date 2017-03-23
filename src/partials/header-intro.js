import React, { Component } from 'react';
import Photo from '../assets/images/photo.png';
import data from '../data/data.json';

class Intro extends Component {
  render() {
    return (
        <div className="intro">
            <div className="container text-center">
                <img className="profile-image" src={Photo} alt="Aaron Jeffrey Nolasco" />
                <h1 className="name">{data.name}</h1>
                <div className="title">{data.title}</div>
                <div className="profile">
                    <p>{data.profile}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default Intro;