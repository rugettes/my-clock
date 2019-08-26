import React, { Component } from 'react'
import './Face.css'

class Face extends Component {
  state = {
    time: new Date()
  }

  componentDidMount () {
    this.timer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  tick () {
    this.setState({
      time: new Date()
    })
  }

  render () {
    return (
      <div id='clock-face'>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Face
