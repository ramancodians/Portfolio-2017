import React from "react"
import classnames from "classnames"
import AnimatedText from "./AnimatedText"

const Button = ({
  title = "",
  children,
  onClick,
}) => (
  <div className="animated-button">
    <button
      onClick={onClick}
      className={classnames("dft-button")}
    >
      <span className="overlay"></span>
      {title}
      {children}
  </button>
  </div>
)

Button.defaultProps = {
  onClick: () => {
    console.warn("onClick Missing")
  }
}

export default Button
