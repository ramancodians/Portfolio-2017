import React from "react"

class Subscribe extends React.Component{

  state = {}

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div className="subscribe">
        <h4>Subscribe to my news letters</h4>
        <form action="">
          <input type="email" name="email" onChange={this.handleInput} placeholder="Your Email Address"/>
          <button>Subscribe</button>
        </form>
      </div>
    )
  }
}

export default Subscribe
