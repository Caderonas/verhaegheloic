import React from 'react';
import Typical from 'react-typical';
import { Link } from "react-scroll";
import './home.scss';

class home extends React.Component {
  render() {
    return (
      <div className="home">
        <header>
          <svg className="circles" viewBox="0 0 855 855" version="1.1">
            <g>
              <g>
                <defs>
                  <path d="M203.6,126.5c56.3-43.8,127-70.3,205.2-71.6l-12.5,9.8c-78.2,1.4-148.9,27.8-205.2,71.6L203.6,126.5z" />
                </defs>
                <path className="home1" d="M203.6,126.5l-12.5,9.8c56.3-43.8,127-70.3,205.2-71.6l12.5-9.8C330.6,56.3,259.9,82.7,203.6,126.5" />
                <defs>
                  <path d="M651.4,728.5c87.7-68.3,140.4-178.7,132-302.4C769.6,223,596.3,61.2,396.3,64.7l12.5-9.8c200-3.5,373.3,158.3,387.1,361.4c8.4,123.7-44.3,234.1-132,302.4L651.4,728.5z" />
                </defs>
                <g className="home2">
                  <path className="home1" d="M408.8,54.9l-12.5,9.8c81.7-1.4,158.9,24.7,222.7,70l12.5-9.8C567.8,79.6,490.5,53.5,408.8,54.9" />
                  <path className="home3" d="M631.5,124.9l-12.5,9.8c13,9.2,25.5,19.3,37.3,30l12.5-9.8C657,144.2,644.5,134.1,631.5,124.9" />
                  <path className="home4" d="M668.8,154.9l-12.5,9.8c9.5,8.7,18.6,17.8,27.3,27.4l12.5-9.8C687.4,172.8,678.3,163.6,668.8,154.9" />
                  <path className="home5" d="M696,182.3l-12.5,9.8c7.7,8.5,14.9,17.3,21.9,26.4l12.5-9.8C711,199.7,703.7,190.8,696,182.3" />
                  <path className="home6" d="M717.9,208.8l-12.5,9.8c6.5,8.5,12.6,17.3,18.3,26.4l12.5-9.8C730.5,226.1,724.4,217.3,717.9,208.8" />
                  <path className="home7" d="M736.2,235.2l-12.5,9.8c5.5,8.7,10.7,17.7,15.6,26.8l12.5-9.8C747,252.9,741.8,243.9,736.2,235.2" />
                  <path className="home8" d="M751.9,262l-12.5,9.8c4.8,9.1,9.3,18.3,13.4,27.8l12.5-9.8C761.1,280.4,756.7,271.1,751.9,262" />
                  <path className="home9" d="M765.2,289.9l-12.5,9.8c4.2,9.6,7.9,19.5,11.3,29.5l12.5-9.8C773.2,309.3,769.4,299.5,765.2,289.9" />
                  <path className="home10" d="M776.6,319.3l-12.5,9.8c3.6,10.5,6.7,21.2,9.3,32.1l12.5-9.8C783.2,340.5,780.1,329.8,776.6,319.3" />
                  <path className="home11" d="M785.9,351.4l-12.5,9.8c2.9,12,5.3,24.2,7.1,36.6L793,388C791.2,375.6,788.8,363.4,785.9,351.4" />
                  <path className="home12" d="M793,388l-12.5,9.8c1.3,9.3,2.3,18.8,3,28.3c0.4,6.1,0.7,12.1,0.8,18.1l12.5-9.8c-0.1-6-0.4-12-0.8-18.1C795.3,406.8,794.3,397.3,793,388" />
                  <path className="home13" d="M796.7,434.4l-12.5,9.8c0.5,25.9-1.7,51.8-6.6,77.2l12.5-9.8C795.1,486.2,797.3,460.3,796.7,434.4" />
                  <path className="home14" d="M790.2,511.6l-12.5,9.8c-4.3,22.1-10.7,43.7-19,64.5l12.5-9.8C779.5,555.3,785.9,533.7,790.2,511.6" />
                  <path className="home13" d="M771.1,576.1l-12.5,9.8c-9.6,23.8-21.7,46.4-36.3,67.5l12.5-9.8C749.4,622.6,761.5,599.9,771.1,576.1" />
                  <path className="home12" d="M734.8,643.6l-12.5,9.8c-8.5,12.2-17.7,23.9-27.7,34.9l12.5-9.8C717.1,667.5,726.4,655.9,734.8,643.6" />
                  <path className="home11" d="M707.1,678.6l-12.5,9.8c-8,8.8-16.5,17.3-25.3,25.2l12.5-9.8C690.7,695.8,699.1,687.4,707.1,678.6" />
                  <path className="home10" d="M681.8,703.8l-12.5,9.8c-5.8,5.2-11.7,10.1-17.8,14.9l12.5-9.8C670.1,713.9,676,709,681.8,703.8" />
                </g>
              </g>

              <defs>
                <path d="M663.9,718.7l-12.5,9.8c-56.3,43.8-127,70.3-205.2,71.6c-200,3.5-373.3-158.3-387.1-361.4c-8.4-123.7,44.3-234.1,132-302.4l12.5-9.8c-87.7,68.3-140.4,178.7-132,302.4C85.4,632,258.7,793.8,458.7,790.4C536.9,789,607.6,762.5,663.9,718.7z" />
              </defs>

              <g className="home15">
                <path className="home1" d="M663.9,718.7l-12.5,9.8c-56.3,43.8-127,70.3-205.2,71.6c-81.7,1.4-158.9-24.7-222.7-70l12.5-9.8c63.7,45.3,141,71.4,222.7,70C536.9,789,607.6,762.6,663.9,718.7" />
                <path className="home3" d="M236,720.4l-12.5,9.8c-13-9.2-25.5-19.3-37.3-30l12.5-9.8C210.6,701.1,223,711.1,236,720.4" />
                <path className="home4" d="M198.8,690.3l-12.5,9.8c-9.5-8.7-18.6-17.8-27.3-27.4l12.5-9.8C180.2,672.5,189.2,681.6,198.8,690.3" />
                <path className="home5" d="M171.5,662.9l-12.5,9.8c-7.7-8.5-14.9-17.3-21.9-26.5l12.5-9.8C156.5,645.6,163.8,654.4,171.5,662.9" />
                <path className="home6" d="M149.6,636.4l-12.5,9.8c-6.5-8.5-12.6-17.3-18.3-26.4l12.5-9.8C137.1,619.1,143.2,627.9,149.6,636.4" />
                <path className="home7" d="M131.3,610l-12.5,9.8c-5.5-8.7-10.8-17.7-15.6-26.8l12.5-9.8C120.5,592.4,125.7,601.3,131.3,610" />
                <path className="home8" d="M115.7,583.2l-12.5,9.8c-4.8-9.1-9.3-18.3-13.4-27.8l12.5-9.8C106.4,564.9,110.9,574.1,115.7,583.2" />
                <path className="home9" d="M102.3,555.4l-12.5,9.8c-4.2-9.6-7.9-19.5-11.3-29.5l12.5-9.8C94.4,535.9,98.2,545.8,102.3,555.4" />
                <path className="home10" d="M91,525.9l-12.5,9.8c-3.6-10.5-6.7-21.2-9.3-32.1l12.5-9.8C84.3,504.7,87.4,515.4,91,525.9" />
                <path className="home11" d="M81.6,493.8l-12.5,9.8c-2.9-12-5.3-24.2-7.1-36.6l12.5-9.8C76.4,469.6,78.7,481.8,81.6,493.8" />
                <path className="home12" d="M74.6,457.2L62,467c-1.3-9.3-2.3-18.8-3-28.3c-0.4-6.1-0.7-12.1-0.8-18.1l12.5-9.8c0.1,6,0.4,12,0.8,18.1C72.2,438.5,73.2,447.9,74.6,457.2" />
                <path className="home13" d="M70.8,410.8l-12.5,9.8c-0.5-25.9,1.7-51.8,6.6-77.2l12.5-9.8C72.5,359.1,70.3,384.9,70.8,410.8" />
                <path className="home14" d="M77.4,333.6l-12.5,9.8c4.3-22.1,10.7-43.7,19-64.5l12.5-9.8C88,289.9,81.7,311.6,77.4,333.6" />
                <path className="home13" d="M96.4,269.1l-12.5,9.8c9.6-23.8,21.7-46.4,36.3-67.5l12.5-9.8C118.2,222.7,106,245.3,96.4,269.1" />
                <path className="home12" d="M132.7,201.6l-12.5,9.8c8.5-12.2,17.7-23.9,27.7-34.9l12.5-9.8C150.4,177.7,141.2,189.4,132.7,201.6" />
                <path className="home11" d="M160.4,166.7l-12.5,9.8c8-8.8,16.5-17.3,25.4-25.2l12.5-9.8C176.9,149.4,168.4,157.8,160.4,166.7" />
                <path className="home10" d="M185.8,141.4l-12.5,9.8c5.8-5.2,11.7-10.1,17.8-14.9l12.5-9.8C197.5,131.3,191.5,136.3,185.8,141.4" />
              </g>
              <animateTransform
                accumulate="none"
                additive="replace"
                attributeName="transform"
                attributeType="XML"
                calcMode="linear"
                dur="30s"
                fill="remove"
                from="360 427.5 427.5"
                repeatCount="indefinite"
                restart="always"
                to="0 427.5 427.5"
                type="rotate">
              </animateTransform>
            </g>
            <g id="circle_point" className="home16">
              <circle className="home17" cx="427.5" cy="427.5" r="425" />
              <animateTransform
                accumulate="none"
                additive="replace"
                attributeName="transform"
                attributeType="XML"
                calcMode="linear"
                dur="50s"
                fill="remove"
                from="0 427.5 427.5"
                repeatCount="indefinite"
                restart="always"
                to="360 427.5 427.5"
                type="rotate">
              </animateTransform>
            </g>
          </svg>

          <Typical
            className="title"
            steps={[' Young.', 2000, ' Belgian.', 2000, ' Web-designer.', 2000, ' Freelancer.', 2000, ' Self-learner.', 2000]}
            loop={Infinity}
            wrapper="h1"
          />

          <h2>Loïc Verhaeghe</h2>

        </header>
        <footer>
          <svg viewBox="0 0 1920 75" version="1.1">
            <Link
              activeClass="active"
              to="pickupline"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              <g className="frame">
                <path d="M960 74.974L0 75V74.974C0 -15.528 433.36 27 960 27C1486.64 27 1920 -15.528 1920 74.974H960Z" />
                <path className="sub-frame" d="M960 74.9664L0 75V74.9664C0 -42.0972 433.36 12.9124 960 12.9124C1486.64 12.9124 1920 -42.0972 1920 74.9664H960Z" />
              </g>
              <path className="button" d="M987 54.169C986.343 54.1702 985.693 54.0417 985.086 53.7908C984.479 53.5399 983.928 53.1716 983.464 52.707L975.293 44.535C975.111 44.3464 975.01 44.0938 975.012 43.8316C975.015 43.5694 975.12 43.3186 975.305 43.1332C975.491 42.9478 975.741 42.8426 976.004 42.8403C976.266 42.838 976.518 42.9388 976.707 43.121L984.878 51.293C985.441 51.8548 986.204 52.1703 987 52.1703C987.796 52.1703 988.559 51.8548 989.122 51.293L997.293 43.121C997.385 43.0255 997.496 42.9493 997.618 42.8969C997.74 42.8445 997.871 42.8169 998.004 42.8157C998.136 42.8146 998.268 42.8399 998.391 42.8902C998.514 42.9405 998.625 43.0147 998.719 43.1086C998.813 43.2025 998.888 43.3141 998.938 43.437C998.988 43.5599 999.013 43.6916 999.012 43.8244C999.011 43.9572 998.983 44.0884 998.931 44.2104C998.879 44.3324 998.802 44.4427 998.707 44.535L990.536 52.707C990.072 53.1716 989.521 53.5399 988.914 53.7908C988.307 54.0417 987.657 54.1702 987 54.169Z" />
            </Link>
          </svg>
        </footer>
      </div>
    );
  }
}

export default home;
