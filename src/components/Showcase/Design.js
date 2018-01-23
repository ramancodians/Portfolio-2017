import React from "react"
import "./design.scss"

const Comp1 = () => (
  <section>
  <div className="label">CSS Conversion of artwork by <a href="https://dribbble.com/shots/3092290-Animated-Pattern">Burnt Toast Creative</a></div>
  <div className="art">
    <div className="angle-topleft"></div>
    <div className="angle-bottomleft"></div>
    <div className="ball"></div>
    <div className="squiggle squiggle-left">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;">
        <path d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
          c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
          c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"/>
        </svg>
    </div>
    <div className="squiggle squiggle-right">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;">
        <path d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
          c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
          c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"/>
        </svg>
    </div>
    <div className="cross cross-left"></div>
    <div className="cross cross-right"></div>
    <div className="triangle triangle-bottom-left">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="75.8 -672.6 110 60" style="enable-background:new 75.8 -672.6 110 60;" >
        <path className="st0" d="M84.2-621l45.2-45.2c0.8-0.8,2-0.8,2.8,0l45.2,45.2c1.3,1.3,0.4,3.4-1.4,3.4H85.6
	C83.8-617.6,82.9-619.8,84.2-621z"/>
      </svg>
    </div>
    <div className="triangle triangle-bottom-middle">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="75.8 -672.6 110 60" style="enable-background:new 75.8 -672.6 110 60;">
        <path className="st0" d="M84.2-621l45.2-45.2c0.8-0.8,2-0.8,2.8,0l45.2,45.2c1.3,1.3,0.4,3.4-1.4,3.4H85.6
	C83.8-617.6,82.9-619.8,84.2-621z"/>
      </svg>
    </div>
    <div className="ra-triangle ra-top">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;">
        <path className="bg" d="M9.5,73.4L73.4,9.5c1.3-1.3,0.4-3.4-1.4-3.4H8.1c-1.1,0-2,0.9-2,2v63.9C6.1,73.7,8.2,74.6,9.5,73.4z"/>
        <path className="line" d="M9.5,73.4L73.4,9.5c1.3-1.3,0.4-3.4-1.4-3.4H8.1c-1.1,0-2,0.9-2,2v63.9C6.1,73.7,8.2,74.6,9.5,73.4z"/>
      </svg>
    </div>
    <div className="ra-triangle ra-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;">
        <path className="line bg" d="M70.5,6.6L6.6,70.5c-1.3,1.3-0.4,3.4,1.4,3.4h63.9c1.1,0,2-0.9,2-2V8.1C73.9,6.3,71.8,5.4,70.5,6.6z"/>
      </svg>
    </div>
    <div className="ra-triangle ra-right">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;">
        <path className="bg" d="M70.5,6.6L6.6,70.5c-1.3,1.3-0.4,3.4,1.4,3.4h63.9c1.1,0,2-0.9,2-2V8.1C73.9,6.3,71.8,5.4,70.5,6.6z"/>
        <path className="line" d="M70.5,6.6L6.6,70.5c-1.3,1.3-0.4,3.4,1.4,3.4h63.9c1.1,0,2-0.9,2-2V8.1C73.9,6.3,71.8,5.4,70.5,6.6z"/>
      </svg>
    </div>
    <div className="diag"></div>
    <div className="box"></div>
    <div className="cylinder">
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
    <div className="semicircle-rotated">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 110 110" style="enable-background:new 0 0 110 110;">
        <path className="st1" d="M89.9,19.1c19.5,19.5,19.5,51.2,0,70.7s-51.2,19.5-70.7,0"/>
      </svg>
    </div>
    <div className="semicircle-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 110 60" style="enable-background:new 0 0 110 60;">
        <path className="st1" d="M5,55C5,27.4,27.4,5,55,5s50,22.4,50,50"/>
      </svg>
    </div>
    <div className="vertical-line">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 10 60" style="enable-background:new 0 0 10 60;">
        <line x1="5" y1="5" x2="5" y2="55"/>
      </svg>
    </div>
    <div className="cone">
      <div className="cone-holder">
        <div className="top-holder">
          <div className="top"></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;">
          <path className="bg" d="M54.3,6.4L30.9,53.2c-0.4,0.7-1.4,0.7-1.8,0L5.7,6.4C5.4,5.8,5.9,5,6.6,5h46.8C54.1,5,54.6,5.8,54.3,6.4z"/>
          <path className="line" d="M54.3,6.4L30.9,53.2c-0.4,0.7-1.4,0.7-1.8,0L5.7,6.4C5.4,5.8,5.9,5,6.6,5h46.8C54.1,5,54.6,5.8,54.3,6.4z"/>
        </svg>
      </div>
    </div>
    <div className="longdiag longdiag-right">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;">
        <line className="first" x1="7.3" y1="7.3" x2="42.7" y2="42.7"/>
        <line className="second" x1="7.3" y1="7.3" x2="42.7" y2="42.7"/>
      </svg>
    </div>
    <div className="longdiag longdiag-left">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;">
        <line className="first" x1="42.7" y1="7.3" x2="7.3" y2="42.7"/>
        <line className="second" x1="42.7" y1="7.3" x2="7.3" y2="42.7"/>
      </svg>
    </div>
    <div className="longdiag longdiag-veryright">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;">
        <line className="first" x1="42.7" y1="7.3" x2="7.3" y2="42.7"/>
        <line className="second" x1="42.7" y1="7.3" x2="7.3" y2="42.7"/>
      </svg>
    </div>
    <div className="drawn-squiggle">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;">
        <path d="M6.4,206.4c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6
          c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27l0,0c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27
          c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27c7.1-7.1,19.9,5.6,27-1.6c7.1-7.1-5.6-19.9,1.6-27s19.9,5.6,27-1.6"/>
        </svg>
    </div>
    <div className="hand">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     viewBox="0 0 222 230" style="enable-background:new 0 0 222 230;">
        <g>
          <path className="hand-st0" d="M218.4,201.3c0,0-9.1-19.6-24.3-48.7c-15.2-29.1-15.3-58.8-25.7-79.3c-10.3-20.5-20.4-28.9-17.4-41.9
            s9.6-19.9,2.1-25.8s-15.8,4.5-18.6,14.1s-3.8,17.8-2.3,21.6c0,0-4-5-11.4-5.3s-10.3,5.3-10.3,5.3l0,0c-0.4-0.5-0.8-1.1-1.3-1.6
            c-9.4-10.8-27.1-8.3-36.5,0.4s-10.8,16.3-27,29.4c-16.2,13.1,1.3,24.6,1.3,24.6l0,0c-4.2-0.2-7.6,1.8-9.9,6.8
            c-5.9,12.5,7.8,23.5,17.5,32.1c9.7,8.6,7.5,4.2,24.3,22.3s25.5,20.3,40.3,21.2c14.7,0.9,17-2.8,17-2.8c3.1,3,7.1,8.3,10.7,17.8
            c7.3,19.2,14.1,33.6,14.1,33.6c1.2,2.8,14.9-0.3,30.8-6.8S219.6,204.1,218.4,201.3z M71.3,108.2c-7.2-6.4-13.8-11.1-19.4-13.1l0,0
            c0,0,4.3,0.5,14.5-8.5c4.5-4,8.2-8,11.1-11.5l10.2-6.4c15.2,25.3,6.7,39.3,0.2,45.5C82.4,114.3,76.5,112.8,71.3,108.2z"/>
          <path className="hand-st1" d="M111.3,59.2c0,0-5.1-12.6,1-15.8l0,0c1.7,2.4,3.3,4.8,4.6,7.1l15.5-9.3c-1.5-3.8-0.5-12,2.3-21.6
            s11.1-19.9,18.6-14.1s0.9,12.7-2.1,25.8c-0.8,3.6-0.7,6.9,0.3,10.2L111.3,59.2z"/>
          <path className="hand-st1" d="M156.8,52.8c3.3,5.5,7.5,11.9,11.8,20.5c10.3,20.5,10.5,50.3,25.7,79.3c15.2,29.1,24.3,48.7,24.3,48.7
            c-1-2.3-10.7-0.6-23.2,3.9c0,0-16.8-32.1-23.8-50.6c-7.1-18.5-8.4-39.3-13.3-57S156.8,64,131,76.3S96.2,92.6,96.2,92.6l0,0
            c-0.2-3.7-1.1-7.9-2.9-12.5L156.8,52.8z"/>
          <path className="hand-st1" d="M51.9,95.1c-1.1-0.4-2.2-0.7-3.3-0.9c0,0,14.3-7,23.7-20.4s9.3-11.8,12.8-9.3c0,0-6.3,10.9-18.8,22
            C56.2,95.6,51.9,95.1,51.9,95.1"/>
          <ellipse transform="matrix(0.9235 -0.3836 0.3836 0.9235 -67.2539 89.136)" className="hand-st2" cx="189.8" cy="213.2" rx="31" ry="5.5"/>
          <path className="hand-st3" d="M82.7,118.1c0,0,28.9-14,2.5-53.5c0,0-6.3,10.9-18.8,22c-10.2,9-14.5,8.5-14.5,8.5"/>
          <path className="hand-st3" d="M47.2,94.1c0,0-17.5-11.5-1.3-24.6s17.6-20.8,27-29.4s27.1-11.3,36.5-0.4c3,3.5,5.5,7.3,7.5,10.8"/>
          <path className="hand-st3" d="M110.6,41.3c0,0,3-5.6,10.3-5.3s11.4,5.3,11.4,5.3c-1.5-3.8-0.5-12,2.3-21.6s11.1-19.9,18.6-14.1
            s0.9,12.7-2.1,25.8s7,21.4,17.4,41.9c10.3,20.5,10.5,50.3,25.7,79.3c15.2,29.1,24.3,48.7,24.3,48.7"/>
          <path className="hand-st4" d="M197.3,32.6l-4.1-9.3L25,97c-0.7,0.3-1.4,0.7-2,1.2l-18.8,15c-1.4,1.1-0.6,3.4,1,3.6c0.2,0,0.4,0,0.6,0
            l23.7-3.7c0.8-0.1,1.5-0.3,2.3-0.7L200,38.7L197.3,32.6z"/>
          <path className="hand-st5" d="M5.2,116.8c0.2,0,0.4,0,0.6,0l23.7-3.7c0.8-0.1,1.5-0.3,2.3-0.7L200,38.7l-2.7-6.1L5.2,116.8z"/>
          <polygon className="hand-st5" points="197.3,32.6 197.3,32.6 200,38.7 	"/>
          <path className="hand-st6" d="M180.5,39.9c-0.3-0.5-0.5-1-0.8-1.6c-1.9-4.3-1.8-8.4,0.2-9.3l-10.5,4.6c-2,0.9-2,5-0.2,9.3
            c0.2,0.5,0.5,1.1,0.8,1.6c1.9,3.4,4.5,5.4,6.2,4.6l10.5-4.6C185,45.3,182.4,43.3,180.5,39.9z"/>
          <path className="hand-st7" d="M197.3,32.6l-4.1-9.3l-13.3,5.8c-2,0.9-2,5-0.2,9.3c0.2,0.5,0.5,1.1,0.8,1.6c1.9,3.4,4.5,5.4,6.2,4.6l13.3-5.8
            L197.3,32.6z"/>
          <path className="hand-st8" d="M176.2,49.2l10.5-4.6c-1.7,0.7-4.3-1.3-6.2-4.6L170,44.5C171.9,47.9,174.4,49.9,176.2,49.2z"/>
          <path className="hand-st9" d="M186.7,44.5l13.3-5.8l-2.7-6.1l-16.8,7.3C182.4,43.3,185,45.3,186.7,44.5z"/>
          <path className="hand-st3" d="M186.7,44.5c-2,0.9-5.1-1.9-6.9-6.2c-1.9-4.3-1.8-8.4,0.2-9.3l-10.5,4.6c-2,0.9-2,5-0.2,9.3
            c1.9,4.3,5,7,6.9,6.2L186.7,44.5z"/>
          <path className="hand-st3" d="M186.7,44.5c-2,0.9-5.1-1.9-6.9-6.2c-1.9-4.3-1.8-8.4,0.2-9.3l13.3-5.8l6.8,15.5L186.7,44.5z"/>
          <path className="hand-st6" d="M22.9,98.3l-18.8,15c-1.6,1.3-0.4,3.9,1.6,3.6l23-3.6c0,0-8.3,0.9-0.9-3.8c7.5-4.7,0.5-4.6-4.3-5.4
            c-4.8-0.9,1.6-7,1.6-7H25l0,0C24.2,97.4,23.6,97.8,22.9,98.3z"/>
          <path className="hand-st3" d="M193.2,23.3L25,97c-0.7,0.3-1.4,0.7-2,1.2l-18.8,15c-1.6,1.3-0.4,3.9,1.6,3.6l23.7-3.7
            c0.8-0.1,1.5-0.3,2.3-0.7L200,38.7L193.2,23.3z"/>
          <path className="hand-st3" d="M25.1,97c0,0-6.4,6.1-1.6,7c4.8,0.9,11.8,0.7,4.3,5.4c-7.5,4.7,0.9,3.8,0.9,3.8"/>
          <path className="hand-st3" d="M6.8,111.1c0,0,4.2,1.1,2.5,5.2"/>
          <path className="hand-st0" d="M136.4,173.6c0,0-2.3,3.7-17,2.8s-23.4-3.1-40.3-21.2S64.5,141.6,54.8,133s-23.4-19.6-17.5-32.1
            s18.6-6.4,34.1,7.3c5.2,4.6,11.1,6.1,16.6,6"/>
          <path className="hand-st1" d="M136.4,173.6c0,0-2.3,3.7-17,2.8c-1.5-0.1-2.9-0.2-4.3-0.3c0,0,3.5-9.4,16-6C131,170,133.2,170.6,136.4,173.6"
            />
          <path className="hand-st3" d="M136.4,173.6c0,0-2.3,3.7-17,2.8s-23.4-3.1-40.3-21.2S64.5,141.6,54.8,133s-23.4-19.6-17.5-32.1
            s18.6-6.4,34.1,7.3c5.2,4.6,11.1,6.1,16.6,6"/>
          <path className="hand-st3" d="M131,170c0,0,8.7,2.2,16,21.4c7.3,19.2,14.1,33.6,14.1,33.6"/>
          <ellipse transform="matrix(0.9158 -0.4016 0.4016 0.9158 4.1073 81.5652)" className="hand-st10" cx="196.6" cy="31" rx="3.9" ry="8.4"/>
        </g>
       </svg>
    </div>
  </div>
</section>
)

export default Comp1
