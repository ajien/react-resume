import React, { Component } from 'react';
import data from '../data/data.json';

class ContactInfo extends Component {
  render() {
    return (
        <div className="contact-info">
            <div className="container text-center">
                <ul className="list-inline">
                    <li className="email"><a href={'mailto:' + data.email}><i className="fa fa-envelope"></i> {data.email}</a></li>
                    <li><a href={'tel:' + data.phone}><i className="fa fa-phone"></i> {data.phone}</a></li>
                    <li><a href={'skype:' + data.skype}><i className="fa fa-skype"></i> {data.skype}</a></li>
                </ul>
            </div>

        </div>
    );
  }
}

export default ContactInfo;