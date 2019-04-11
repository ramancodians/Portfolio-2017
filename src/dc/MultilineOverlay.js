import React from "react"


class MultilineOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.textWrap = React.createRef()
  }

  getNumberOfLines = () => {
    try {
      var el = this.textWrap.current
      var divHeight = el.offsetHeight
      const styles = window.getComputedStyle(el)
      const lineHeight = parseInt(String(styles.lineHeight).replace("px", ""))
      var lines = divHeight / lineHeight;
      console.log({lines, divHeight, lineHeight, lll: el.style.lineHeight, styles})
      this.setState({
        lines,
        lineHeight,
      })
    } catch (e) {
      console.warn(e)
      // ignore
    }
  }

  componentDidMount() {
    const lines = this.getNumberOfLines()
  }

  renderOverlay = () => {
    const { lines, lineHeight } = this.state
    const { delay } = this.props
    if (lines && lineHeight) {
      const linesToRender = Array(lines).fill(1).map((item, index) => index)
      console.log(linesToRender)
      return (
        <div className="overlay-wrap">
          {linesToRender.map(item => (
            <div
              className="overlay"
              style={{ height: lineHeight - 8, animationDelay: `${delay}s` }}>
            </div>
          ))}
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    const { text, delay } = this.props
    return (
      <p ref={this.textWrap} className="multiline">
        {this.renderOverlay()}
        <span style={{ animationDelay: `${delay}s` }}>{text}</span>
      </p>
    )
  }
}

export default MultilineOverlay