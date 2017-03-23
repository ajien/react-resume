import React, { Component } from 'react';
import TopBar from './header-topbar.js';
import Intro from './header-intro.js';
import ContactInfo from './header-contactinfo.js';
import PageNav from './header-pagenav.js';


class Header extends Component {
  render() {
    return (
    <header className="header">
        
        <TopBar />
        <Intro />
        <ContactInfo />
        <PageNav />
        
    </header>
    );
  }
}

export default Header;