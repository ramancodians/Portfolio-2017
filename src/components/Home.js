import React from "react"
import { Link } from "react-router-dom"
import ScrollLine from "dc/ScrollLine"
import Welcome from "./Welcome"
import Work from "./Work"

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <ScrollLine />
        <div>
          <Welcome />
          <Work />
        </div>
      </div>
    )
  }
}

export default Home
