import React from "react"
import { Link } from "react-router-dom"
import classnames from "classnames"

// Images
import MeStanding from "images/1.png"
import NinjaImg from "images/icons/ninja.png"
import ClientImg from "images/icons/client.png"
import StudentImg from "images/icons/student.png"

const UserTypeModal = ({ show, toggleUserTypeModal }) => (
  <div className={classnames("modal user_type", {
      show: show,
      hide: !show,
    })}>
    <div className="modal_wrap">
      <div className="close_btn_wrap">
        <button className="menu_btn close" onClick={() => {toggleUserTypeModal(false)}}>
          <div></div>
        </button>
      </div>

      <h2>May I know who are you?</h2>
      <ul>
        <li>
          <Link to="/students">
            <img src={StudentImg} alt="Student Section"/>
            <span>Student</span>
          </Link>
        </li>
        <li>
          <Link to="/freelance">
            <img src={ClientImg} alt="Freelancing, Clients, Raman Choudhary"/>
            <span>Client</span>
          </Link>
        </li>
        <li>
          <Link to="/about-me">
            <img src={NinjaImg} alt="Raman Choudhary about me"/>
            <span>Ninja</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
)


class Welcome extends React.Component {

  state = {
    showUserTypeModal: false,
  }

  toggleUserTypeModal = (show) => {
    this.setState({
      showUserTypeModal: show
    })
  }

  render() {
    const { showUserTypeModal } = this.state
    console.log(this.state);
    return (
      <div className="home_welcome">
        <UserTypeModal
          show={showUserTypeModal}
          toggleUserTypeModal={this.toggleUserTypeModal}
          />
        <div className="left">
          <h3>Hi, I'm <span>Raman Choudhary</span></h3>
          <h4>a young,</h4>
          <h1>Frontend Developer</h1>
          <button
            onClick={() => { this.toggleUserTypeModal(true) }}
          >I want to know more</button>
        </div>
        <div className="right">
          <h1>Side two</h1>
          <img src={MeStanding} alt="Raman Choudhary"/>
        </div>
      </div>
    )
  }
}

export default Welcome
