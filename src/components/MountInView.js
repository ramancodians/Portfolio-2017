import React from "react"
import handleViewport from "react-in-viewport"

class MountInView extends React.Component {
  render() {
    const { inViewport, children, type } = this.props
    console.log({ inViewport, type })
    if (inViewport) {
      console.log("render", type)
      return (
        <div>
          {children}
        </div>
      )
    }
    return <div style={{ height: "0vh", width: "100%" }}></div>
  }
}

export default handleViewport(MountInView, { rootMargin: "0px" })
