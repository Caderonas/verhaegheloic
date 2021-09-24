import React, {Component} from 'react';
import { useSpring, animated } from 'react-spring'

import './home.scss';

import { MenuItems } from "./MenuItems";
import Logo_night from './logo-caderonas.svg';
class NavBar extends Component {
  render() {
    return (
      <navs className="Navbar">
        <div className="menu-icon">
          <img src={Logo_night} alt="Logo Caderonas"/>
        </div>
        <ul>
            {MenuItems.map((item, index) =>{
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}> {item.title} </a>
                  </li>
                )
            })}
        </ul>
      </navs>
    );
  }
}

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 12 - 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 15}px,${y / 10 - 300}px,0)`

function Home() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
      <div className="home_night" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <NavBar></NavBar>
        <animated.div className="bg_img" style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
        <animated.div className="ft_img" style={{ transform: props.xy.interpolate(trans2) }}></animated.div>
        <a href="#">
          <svg className="arrow-bottom" width="76" height="35" viewBox="0 0 76 35">
            <path d="M75.4696 2.8499L39.0907 34.6039C38.8262 34.868 38.4955 35 38.1647 35C38.0986 35 38.0986 35 38.0325 35H37.834C37.5033 35 37.1726 34.868 36.908 34.6039L0.595291 2.8499C0.19843 2.51981 0 2.0577 0 1.59558C0 1.19948 0.132287 0.803379 0.39686 0.539313C0.992151 -0.120854 2.05045 -0.18687 2.71188 0.40728L37.9663 31.2371L73.2207 0.40728C73.5515 0.143213 73.9483 0.0111797 74.279 0.0111797C74.742 0.0111797 75.205 0.20923 75.5358 0.605329C76.1972 1.19948 76.1311 2.25575 75.4696 2.8499Z" />
          </svg>
        </a>
      </div>
    );
}

export default Home;
