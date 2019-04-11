import React from "react"
import Button from "./Button"
import AnimatedText from "./AnimatedText"
import MultilineOverlay from "./MultilineOverlay"

const ProjectThumbnail = ({
  title,
  children,
  images,
  text,
}) => (
  <div className="project-thumb">
    <AnimatedText>
      <h2>{title}</h2>
    </AnimatedText>
    <MultilineOverlay text={text} delay="0.5"/>
    <div>
      <Button>
        <span>Know More</span>
      </Button>
    </div>
  </div>
)

export default ProjectThumbnail
