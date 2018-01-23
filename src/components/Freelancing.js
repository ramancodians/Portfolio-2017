import React from "react"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// Technologies Image
import ReactImg from "images/icons/react.png"
import AngularImg from "images/icons/angular.jpg"
import AIImg from "images/icons/ai.png"
import CSS3Img from "images/icons/css3.png"
import HTMLImg from "images/icons/html.png"
import JQImg from "images/icons/jq.gif"
import JSImg from "images/icons/js.png"
import PHPImg from "images/icons/php.png"
import PSImg from "images/icons/ps.png"
import ProImg from "images/icons/pro.jpg"
import KotlinImg from "images/icons/kotlin.jpg"

class Freelance extends React.Component {
  state = {}

  render() {
    return (
      <div className="freelance">
        <main>
          <h1>Let's Work Together!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus rem inventore unde architecto dolorum odit illum velit officiis pariatur, numquam enim recusandae libero expedita nesciunt perspiciatis suscipit, veritatis iste. Architecto dolor aliquam assumenda esse blanditiis, et magni. Nesciunt, est!</p>
          <button>Hire me</button>

        </main>
        <div className="section tech_i_work_in">
          <h2>Technologies I work in</h2>
          <div>
            <h5>Frameworks</h5>
            <ul>
              <li>
                <div>
                  <img src={ReactImg} alt="React"/>
                  <h3>React / Native</h3>
                </div>
              </li>
              <li>
                <div>
                  <img src={AngularImg} alt="Angular"/>
                  <h3>Angular</h3>
                </div>
              </li>
              <li>
                <div>
                  <img src={JQImg} alt="Jquery"/>
                  <h3>Jquery</h3>
                </div>
              </li>
              <li>
                <div>
                  <img src={PHPImg} alt="PHP"/>
                  <h3>PHP</h3>
                </div>
              </li>

            </ul>
          </div>

          <ReactCSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={3000}
            transitionLeaveTimeout={3000}
          >
          <h1>Hellow</h1>
          </ReactCSSTransitionGroup>

          <div>
            <h5>Languages</h5>
            <ul>
              <li>
                <div>
                  <img src={JSImg} alt="JavaScript"/>
                  <h3>JavaScript</h3>
                </div>
              </li>
              <li>
                <div>
                  <img src={KotlinImg} alt="Kotlin"/>
                  <h3>Kotlin</h3>
                </div>
              </li>
              <li>
                <div>
                  <img src={PHPImg} alt="PHP"/>
                  <h3>PHP</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Freelance
