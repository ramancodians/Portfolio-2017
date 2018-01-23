import React from 'react';
import {Link, BrowserRouter, History } from 'react-router-dom';
import { browserHistory } from "react-router"
import Sidebar from "./Sidebar"
import "./styles/header.scss"


class Navigation extends React.Component {

  state = {
    showSidebar: false,
  }

  componentDidMount() {
    console.log(BrowserRouter, History);
    window.onbeforeunload = function() {
       console.log("asdadasdasd asda sd ");
    }
  }

  toggleSidebar = (show) => {
    this.setState({
      showSidebar: show
    })
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <header>
        <Sidebar
          show={showSidebar}
          handleClose={()=> { this.toggleSidebar(false)}}
        />
        <div className="container">
          <div className="site_name">
            <div>Raman </div>
            <div>Choudhary</div>
          </div>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>
              <span className="new_badge">new</span>
              <Link to="/weekend-project">
                Weekend Project
              </Link>
            </li>
            <li>
              <span className="menu_button">
                <button onClick={()=> { this.toggleSidebar(true) }}>=</button>
              </span>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Navigation;
