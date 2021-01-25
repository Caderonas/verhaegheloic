import React from 'react';
import './pickupline.scss';

const b_d = new Date("August 8, 1997");
/**
 * Age - Determine my age
 *
 * @param  {b_d}     Date anniversary
 * @param  {Date()}     Date today
 *
 * @example - age( new Date('August 8, 1997 00:00:00') )
 * @returns - Int my_age
 */
const age = function (d_d){
  	const years = new Date().getFullYear()-d_d.getFullYear()-1;
  	let adj = new Date().getMonth()-d_d.getMonth()>=0?1:0;
	  adj = new Date().getDate()-d_d.getDate()>=0?adj:0;
  	return years+adj;
};

function pickupline() {
  return (
    <div className="pickupline" alt="pickupline_pro">

      <div className="frame" >

        <h4>Loïc Verhaeghe {age(b_d)} years old, always be pationate by IT stuff,
          <br />hopefully I may integrate 19 school soon...
          <br />Junior fullstack developer
        </h4>

        <svg viewBox="0 0 999 357" version="1.1">
          <g opacity="0.3" filter="url(#filter0_di)">
            <path d="M151.97 40.6306C164.1 16.057 189.128 0.5 216.533 0.5H792.677C820.786 0.5 846.325 16.8581 858.08 42.3913L951.993 246.391C973.954 294.094 939.105 348.5 886.591 348.5H115.835C62.4719 348.5 27.652 292.481 51.2718 244.631L151.97 40.6306Z" fill="#97A5C0" />
          </g>
          <g opacity="0.3" filter="url(#filter1_di)">
            <path d="M172.193 73.6653C183.653 47.4452 209.552 30.5 238.167 30.5H781.421C811.172 30.5 837.859 48.7985 848.582 76.55L906.154 225.55C924.382 272.726 889.568 323.5 838.993 323.5H173.045C121.133 323.5 86.2813 270.232 107.071 222.665L172.193 73.6653Z" fill="#97A5C0" />
          </g>
          <path d="M793.934 6.00002H217.79C192.669 6.00002 169.726 20.2606 158.607 42.7864L57.9091 246.786C36.2575 290.649 68.1758 342 117.092 342C374.01 344 865.696 346.5 887.848 342C910 337.5 887.848 348 887.848 348H117.092C63.729 348 28.909 291.981 52.5289 244.131L153.227 40.1306C165.357 15.557 190.385 0 217.79 0L793.934 2.28882e-05C822.043 2.28882e-05 847.582 16.3581 859.337 41.8914L953.25 245.891C953.25 245.891 947.8 259.801 947.8 248.4C947.8 237 853.887 44.4004 853.887 44.4004C843.112 20.9949 819.701 6.00002 793.934 6.00002Z" fill="white" />
          <defs>
            <filter id="filter0_di" x="39.743" y="0.5" width="922.932" height="356" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="12" dy="17" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
            <filter id="filter1_di" x="96.9654" y="30.5" width="818.095" height="301" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="12" dy="17" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
            </filter>
          </defs>
        </svg>

      </div>
      
      <svg className="footer" viewBox="0 0 1923 119" version="1.1">
        <path  d="M2 16.3866C48.0746 14.5473 94.1485 12.6966 140.182 10.6722C170.427 9.34214 200.435 7.28874 230.748 6.17506C385.433 0.492096 543.424 -1.10077 696.025 12.5657C801.009 21.9679 901.276 37.5751 1002.42 52.7016C1089.24 65.6853 1175.96 79.4165 1267.97 83.3023C1305.27 84.8777 1337.88 85.1655 1375.5 84.9254C1432.56 84.5612 1490.66 83.1116 1545.97 76.4383C1625.79 66.8092 1838.52 23.7699 1910 6.17506"/>
        <path  d="M1909 109C1815.67 102.194 1638.14 82.9021 1549.28 69.1799C1444.77 53.0413 1342.3 28.3121 1234.02 17.8863C1139.62 8.79758 1049.2 6.75176 952.848 8.64405C743.669 12.7523 538.146 28.2254 331.101 40.6721C266.845 44.5349 201.916 48.3943 137.127 50.2631C120.601 50.7398 27.8496 60.6299 15 58.8659" />
        <path  d="M16 117C110.322 115.329 414.594 96.6478 505.652 85.6045C613.455 72.5306 721.832 56.9158 831.874 47.7882C898.327 42.2762 970.276 42.8026 1037.71 43.278C1406.67 45.8792 1619.86 114.419 1921 117"/>
      </svg>
    </div>
    );
}

export default pickupline;
