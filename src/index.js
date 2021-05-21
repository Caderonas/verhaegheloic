import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Home from './home';
import Navbar from './navbar';
import Pickupline from './pickupline';
import Timeline from './timeline';
import Portfolio from './portfolio';
import Bottom from './bottom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Pickupline />
    <Timeline />
    <Portfolio />
    <Bottom />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
