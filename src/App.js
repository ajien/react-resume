import React, { Component } from 'react';
import Header from './partials/header.js';
import MainWrapper from './partials/wrapper-container.js';
import Footer from './partials/footer.js';

//import './assets/plugins/bootstrap/js/bootstrap.min.js';
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/plugins/font-awesome/css/font-awesome.css';
import './assets/css/style.css';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <MainWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
