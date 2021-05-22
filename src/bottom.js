import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import TextAnimation from 'react-animate-text';
import './bottom.scss';
function bottom() {
  return (
    <div className="bottom" alt="Website's footer">
      <ScrollLink
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          <svg className="separator" data-name="Calque 1" viewBox="0 0 1920 86">
            <path class="separator1" d="M960.29.71.29.69v0c0,90.5,433.36,48,960,48s960,42.52,960-48Z"/>
            <path class="separator2" d="M960.29.72.29.69v0c0,117.06,433.36,62.05,960,62.05s960,55,960-62Z"/>
            <path class="separator3" d="M987.29,21.52a5,5,0,0,0-1.91.38A5,5,0,0,0,983.76,23l-8.17,8.17a1,1,0,0,0-.28.71.94.94,0,0,0,.29.69,1,1,0,0,0,.7.3,1,1,0,0,0,.7-.28l8.17-8.18a3,3,0,0,1,4.25,0l8.17,8.18a1,1,0,0,0,.32.22,1,1,0,0,0,.39.08,1.07,1.07,0,0,0,.39-.07,1,1,0,0,0,.32-.22,1,1,0,0,0,.22-1.1,1,1,0,0,0-.23-.33L990.83,23a5,5,0,0,0-1.62-1.08,5.06,5.06,0,0,0-1.92-.38Z"/>
          </svg>
      </ScrollLink>
      <svg className="contacts" data-name="Calque 1" viewBox="0 0 762 267">
        <rect id="separator" class="contact1" x="2" y="179" width="756" height="15" rx="7.5"/>
          <a href="mailto:loicver1997@gmail.com">
            <g id="lg_mail">
              <path class="contact2" d="M680,151.5a75,75,0,1,1,75-75A75.08,75.08,0,0,1,680,151.5ZM680,9.56A66.94,66.94,0,1,0,746.94,76.5,67,67,0,0,0,680,9.56Z"/>
              <rect class="contact3" x="633.04" y="52.28" width="94" height="54" rx="4.32"/>
              <path class="contact3" d="M681.42,91.3l42.71-33.59a3,3,0,0,0-1.88-5.43H636.83A3,3,0,0,0,635,57.71L677.66,91.3A3,3,0,0,0,681.42,91.3Z"/>
              <text class="contact4" transform="translate(698.74 96.74)">@</text>
            </g>
        </a>
        <rect id="separator-2" data-name="separator" class="contact1" x="476" y="73.5" width="108" height="6" rx="2"/>
        <a href="tel:+32494043899" title="Tel link">
          <g id="lg_tel">
            <path class="contact2" d="M380,151.5a75,75,0,1,1,75-75A75.08,75.08,0,0,1,380,151.5ZM380,9.56A66.94,66.94,0,1,0,446.94,76.5,67,67,0,0,0,380,9.56Z"/>
            <path class="contact5" d="M383.54,27.68A45.28,45.28,0,0,0,345.49,97.5l-6.88,15.15a4,4,0,0,0,3.6,5.59,3.79,3.79,0,0,0,1.05-.14l18.95-5.2a45.28,45.28,0,1,0,21.33-85.22Zm0,82.65a37.44,37.44,0,0,1-18.82-5.08,3.92,3.92,0,0,0-2-.54,3.74,3.74,0,0,0-1.05.14l-12.38,3.39,4.31-9.5a3.93,3.93,0,0,0-.39-3.94,37.37,37.37,0,1,1,30.32,15.53Z"/>
            <path class="contact5" d="M401,79.74c-1.9-1.13-4.37-2.4-6.6-1.49-1.71.71-2.81,3.39-3.92,4.76a1.64,1.64,0,0,1-2.12.46,29.86,29.86,0,0,1-14.92-12.78,1.83,1.83,0,0,1,.23-2.49c1.08-1.27,2.42-2.7,2.71-4.4s-.5-3.69-1.21-5.21c-.9-1.93-1.9-4.7-3.84-5.79a5.27,5.27,0,0,0-5.72.85,11.62,11.62,0,0,0-4,9.2,13.65,13.65,0,0,0,.37,2.92,24.13,24.13,0,0,0,2.8,6.45,50.1,50.1,0,0,0,2.92,4.45A45.18,45.18,0,0,0,380.3,88.44a38,38,0,0,0,7.91,3.76c3.09,1,5.85,2.09,9.2,1.45s7-2.83,8.35-6.21a5.38,5.38,0,0,0,.38-3.16C405.67,82.09,402.71,80.8,401,79.74Z"/>
          </g>
        </a>
        <rect id="separator-3" data-name="separator" class="contact1" x="176" y="73.5" width="108" height="6" rx="2"/>
          <a href="https://www.facebook.com/loic.verhaeghe.56/" target="_blank" rel="noreferrer">
            <g id="lg_Fb">
              <path class="contact2" d="M80,151.5a75,75,0,1,1,75-75A75.08,75.08,0,0,1,80,151.5ZM80,9.56A66.94,66.94,0,1,0,146.94,76.5,67,67,0,0,0,80,9.56Z"/>
              <path class="contact5" d="M68.24,76.85v43.47a1.13,1.13,0,0,0,1.13,1.13H85.51a1.13,1.13,0,0,0,1.14-1.13V76.15h11.7a1.13,1.13,0,0,0,1.13-1L100.6,61.8a1.13,1.13,0,0,0-1.13-1.23H86.65V51.13a4,4,0,0,1,4-4h9A1.13,1.13,0,0,0,100.8,46V32.68a1.12,1.12,0,0,0-1.13-1.13H84.43A16.19,16.19,0,0,0,68.24,47.74V60.57H60.17A1.13,1.13,0,0,0,59,61.7V75a1.13,1.13,0,0,0,1.13,1.14h8.07Z"/>
            </g>
          </a>
      </svg>
      <TextAnimation>
        <h1 className="text_contact">Feel free to contact me</h1>
      </TextAnimation>
    </div>
    );
}

export default bottom;

