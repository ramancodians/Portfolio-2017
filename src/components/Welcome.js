import React from "react"
import Button from "dc/Button"
import AnimatedText from "dc/AnimatedText"
import Htag from "dc/Htag"

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <Htag tag="Start">
          <AnimatedText delay={0.7}>
            <h1>Hi, my name is Raman Choudhary</h1>
          </AnimatedText>
          <AnimatedText delay={1.2}>
            <h1>
              I <span className="font-design">design</span> and <span className="font-develop">develop</span> <span id="type">webapps</span></h1>
          </AnimatedText>
          <div>
            <AnimatedText delay={1.8}>
              <Button>
                <span>Scroll to know more</span>
                <i className="icon-arrow-right-direction-move-right-forward"></i>
              </Button>
            </AnimatedText>
          </div>
        </Htag>
      </div>
    )
  }
}

export default Welcome