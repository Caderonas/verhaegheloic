import React, { Component } from "react";
import { Link } from "react-scroll";
import { SocialIcon } from 'react-social-icons';

import './navbar.scss';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-content">

          <svg className="nav-logo" viewBox="0 0 157.468 157.468" version="1.1">
            <circle cx="78.734" cy="78.734" r="77.234"/>
            <line x1="33.55" y1="124.324" x2="125.337" y2="32.536"/>
            <path d="M50.679,60.262q2.641-4.5,7.686-20.979.531-.339,1.224-.854a5.488,5.488,0,0,1,1.837-1.144q.194,0,.355.338a1.568,1.568,0,0,1,.161.709,11.093,11.093,0,0,1-1.048,2.981q-.741,1.627-2.9,6.9-.822,2-1.781,4.23t-1.361,3.037a54.391,54.391,0,0,1-2.691,4.9,22.175,22.175,0,0,0,8.492,1.289q.225,0,1.643-.032a39,39,0,0,0,.983-5.495l4.415-2.175q.354,1.918.6,4.464-4.7,7.588-14.469,7.589a20.572,20.572,0,0,1-6.14-.9A18.686,18.686,0,0,1,40.93,66.74,11.529,11.529,0,0,1,34.1,64.355q-3.3-2.385-3.3-4.93a10.448,10.448,0,0,1,.177-1.708l4.7-3.948Q39.271,59.586,50.679,60.262ZM61.958,40.991l3.448-4.367h.113q2.514,1.467,2.514,3.191a17.224,17.224,0,0,1-.339,2.739q-2.24,2.53-2.385,2.788a11.83,11.83,0,0,0-1.692-3.755,1.818,1.818,0,0,0-1.24-.644A2.619,2.619,0,0,0,61.958,40.991Z"/>
            <path d="M116.782,89.73q3.253.934,4.043,1.1a14.463,14.463,0,0,1,.614,4.109,12.132,12.132,0,0,1-.919,4.7,24.128,24.128,0,0,0-1.926,1.717q-.99.974-2.231,2.4t-2.434,2.973a91.455,91.455,0,0,0-6.863,10.151l-4.9,2.466-.451-7.477a36.808,36.808,0,0,0-.758-5.833,16.462,16.462,0,0,0-1.385-3.916,17.625,17.625,0,0,0-2.385-3.287,25.685,25.685,0,0,0-12.117-2.9,22.012,22.012,0,0,0-3.449.29,45.439,45.439,0,0,0,3.11-4.8,15.279,15.279,0,0,1,6.881-1.66,17.771,17.771,0,0,1,6.7,1.37,26.658,26.658,0,0,1,3.722,1.893,53.973,53.973,0,0,1,4.479,3.022q.065,1.032.064,1.515,0,.983-.345,5.672t-.8,10.006q5.671-7.9,10.167-11.166l-.145-4.819-3.19.419q.338-.774,1.346-2.554T116.782,89.73Z"/>
          </svg>
          <ul className="nav-items">
            
            <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              <li className="nav-item">Home</li>
            </Link>
            <Link
            activeClass="active"
            to="pickupline"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              <li className="nav-item">Brief</li>
            </Link>
            <Link
            activeClass="active"
            to="tl"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              <li className="nav-item">Timeline</li>
            </Link>
            <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              <li className="nav-item">Projects</li>
            </Link>
            <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
              <li className="nav-item">Contacts</li>
            </Link>
          </ul>

          <div className="networks">
            <SocialIcon
            url="https://github.com/Caderonas"
            style={{ height: 35, width: 35 }} 
            target="_blank"/>
            <SocialIcon 
            url="https://www.linkedin.com/in/lo%C3%AFc-verhaeghe-429410190/"
            style={{ height: 35, width: 35 }} 
            target="_blank"/>
            <SocialIcon
            url="https://www.instagram.com/caderonas/"
            style={{ height: 35, width: 35 }} 
            target="_blank"/>
            <SocialIcon
            url="https://dribbble.com/Caderonas" 
            style={{ height: 35, width: 35 }}
            target="_blank"/>
          </div>

        </div>
      </nav>
    );
  }
}