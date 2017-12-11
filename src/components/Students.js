import React from "react"

import Subscribe from "./Subscribe"
import helloImg from "images/hello.gif"
import helpImg from "images/2.png"
import careerIcon from "images/icons/career.png"
import blogIcon from "images/icons/blog.png"
import videoIcon from "images/icons/video.png"

class Student extends React.Component {
 state = {}
  render() {
    return (
      <div className="student">
        <main>
          <h1>Hello, Budding superhero!</h1>
          <p>
            I guess you came across this website maybe by watching a  <a href="#">YouTube</a> video or reading
            an <a href="#">Article</a> or one your friend recommender to visit. Either ways you are here to know more about
            me and how I can help you.
          </p>
        </main>

        <div className="section">
          <div className="left">
            <h2>Who am I?</h2>
            <p>
              When I was in college, I always felt education is not teaching me skill which I need to know to join an organisation.
              The goal of educations in to produce degree holder than professionals. Because of this I was never motivated to sit
              in class and learn things which were obsolute according to me.
            </p>

            <p>I was more interested in working in hands on projects. With my classmate <a href="#">Fabian</a> <a href="#">Karan </a>
              and Aayush I started Codians
            </p>
          </div>
          <div className="right">
            <img src={helloImg} alt="Hello Raman"/>
          </div>
        </div>

        <div className="section">
          <div className="left">
            <img src={helpImg} alt="Hello Raman"/>

          </div>
          <div className="right">
            <h2>How I can help?</h2>
            <p>
              On Weekly basics I upload on my <a href="#">YouTube Channel</a>. Also I post articles on my <a href="#">Blog</a>. I
              keep you updated with
              whats happening in tech world and what you new or cool things you can learn.
            </p>

            <p>
              Feel free to contact me personally if you have any questions, or wanna share a joke! I love hearing back from younf minds
               like you yourself.
             </p>


          </div>
        </div>
        <div className="student_zone">
          <h2>Things I can help you with?</h2>
          <ul>
            <li>
              <div>
                <h4>Tutorial Video</h4>
                <div>
                  <img src={videoIcon} alt="Video Tutoral Raman Choudhary"/>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ex quaerat possimus aperiam, sed quae. Vel culpa reprehenderit, repellat voluptas?
                    </p>
                    <button>Go to my YouTube Channel</button>
                  </div>
              </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Technology Industry Updates</h4>
                  <div>
                    <img src={blogIcon} alt="Video Tutoral Raman Choudhary"/>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ex quaerat possimus aperiam, sed quae. Vel culpa reprehenderit, repellat voluptas?
                        </p>
                        <button>Go to my YouTube Channel</button>
                      </div>
                  </div>
              </div>
            </li>
            <li>
              <div>
                <h4>Career Advice</h4>
                  <div>
                    <img src={careerIcon} alt="Video Tutoral Raman Choudhary"/>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus ex quaerat possimus aperiam, sed quae. Vel culpa reprehenderit, repellat voluptas?
                        </p>
                        <button>Go to my YouTube Channel</button>
                      </div>
                </div>
              </div>
            </li>
          </ul>

        </div>

        <Subscribe />

      </div>
    )
  }
}

export default Student
