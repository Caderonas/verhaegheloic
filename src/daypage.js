import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Home from './home';
import Navbar from './navbar';
import Pickupline from './pickupline';
import Timeline from './timeline';
import Portfolio from './portfolio';
import Bottom from './bottom';

function Daypage() {
    return (
      <div className="daypage">
        <Navbar />
        <Home />
        <Pickupline />
        <Timeline />
        <Portfolio />
        <Bottom />
      </div>
    );
  }
  export default Daypage;