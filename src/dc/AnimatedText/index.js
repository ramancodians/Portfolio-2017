import React from "react"

const AnimatedText = ({ children, color, delay = 0 }) => (
  <div className="wrapper">
    <span className="overlay" style={{ background: color, animationDelay: `${delay}s` }}></span>
    <div className="child-wrap" style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  </div>
)

export default AnimatedText
