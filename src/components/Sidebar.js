import React from "react"
import classnames from "classnames"
import {Link} from 'react-router-dom';

class Sidebar extends React.Component{

  componentWillMount(){

  }

  render(){
    const {
      show,
      handleClose
    } = this.props
    return(
      <div
        className={
          classnames("sidebar_overlay", {
            show,
          })
        }
      >

        <div className="messages">
          <h4>Quote of the day</h4>
          <h1>"Neeru is a bitch!"</h1>
          <h3> - by Raman Choudhary</h3>
        </div>
        <div className="sidebar">
          <button onClick={handleClose}>Close</button>

          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/work-with-me">Work with me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar
