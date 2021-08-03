import React from 'react';
import './index.scss';

import Home from './Day/home';
import Navbar from './Day/navbar';
import Pickupline from './Day/pickupline';
import Timeline from './Day/timeline';
import Portfolio from './Day/portfolio';
import Bottom from './Day/bottom';

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