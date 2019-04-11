import React from "react"
import classNames from "classnames"
import AnimatedText from "./AnimatedText"

class HTag extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      tag: this.getARandomString(props.tag),
      loaded: false,
    }
  }

  getARandomString = (tag) => {
    return tag && `${tag}&?`.shuffle().substr(0, tag.length).toLowerCase()
  }

  componentDidMount() {
    const interval = 100
    const times = 20
    const { tag } = this.props
    const shuffleTask = setInterval(() => {
      this.setState({
        tag: this.getARandomString(tag)
      })
    }, interval)

    setTimeout(() => {
      clearInterval(shuffleTask)
      this.setState({
        tag,
        loaded: true,
      })
    }, interval * times)
  }

  getContentHeight = () => {

  }

  render() {
    const {
      state: {
        tag,
        loaded,
      },
      props: {
        children,
      }
    } = this
    return (
      <div className={classNames("htag")}>
        <AnimatedText color="#CCC">
          <p className={classNames("tag", { loaded })}>
            <span id="sym">{`<`}</span>
            {`${tag}`}
            <span id="sym">{`>`}</span>
          </p>
        </AnimatedText>
        <div className="child-wrap">
          {children}
        </div>
        <AnimatedText color="#CCC">
        <p className={classNames("tag", { loaded })}>
          <span id="sym">{`</`}</span>
          {`${tag}`}
          <span id="sym">{`>`}</span>
        </p>
        </AnimatedText>
      </div>
    )
  }
}

export default HTag
