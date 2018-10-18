import React, { Component } from 'react';
import data from '../data/data.json';
//import logo from './logo.svg';
//import '../assets/css/header.css';

class TopBar extends Component {
  render() {
    return (
        <div className="top-bar container-fluid">
            <div className="actions no-print">
                <a className="btn hidden-xs" href={'mailto:' + data.email}><i className="fa fa-paper-plane" aria-hidden="true"></i> Hire Me</a>
                <a className="btn" href="#" onClick={window.print} ><i className="fa fa-print" aria-hidden="true"></i> Print My Resume</a>
            </div>
            <ul className="social list-inline no-print">
                <li><a href={data.linkedin}><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>

                <li><a href={data.facebook}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>

                <li><a href={'mailto:' + data.email}><i className="fa fa-envelope" aria-hidden="true"></i></a></li>

                <li><a href={'skype:' + data.skype}><i className="fa fa-skype" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    );
  }
}

export default TopBar;