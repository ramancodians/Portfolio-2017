import React from "react"
import classnames from "classnames"

import MountInView from "./MountInView"
import AnimatedText from "./../dc/AnimatedText"
import HTag from "./../dc/HTag"
import ProjectThumbnail from "./../dc/ProjectThumbnail"

const PROJECTS = [
  { title: "Radius" },
  { title: "Goomo" },
  { title: "Codians" },
  { title: "Playment" },
]

class Work extends React.Component {
  render() {
    return (
      <div className="work">
        <h3 className="work-tag">WORK</h3>
        <HTag tag="Work">
          {PROJECTS.map(item => (
            <MountInView key={item.title} type={item.title}>
              <ProjectThumbnail
                title={item.title}
                text={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nulla fugit cupiditate asperiores maxime nesciunt ducimus illo est dignissimos doloremque, quae vero facilis laborum porro iure! Sunt eligendi aliquam unde!".substr(0, Math.floor(Math.random(0, 1) * 300))}
              />
            </MountInView>
          ))}
        </HTag>
      </div>
    )
  }
}

export default Work
