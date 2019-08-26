import React, { Component } from 'react'
import Face from './Face'
import Player from './Player'
import './Clock.css'

class Clock extends Component {
  state = {
    power: false,

    modulation: 'FM'
  }

  togglePower = () => {
    if (this.state.power) {
      this.setState({ power: false })
    } else {
      this.setState({ power: true })
    }
  }

  toggleModulation = () => {
    if (this.state.modulation === 'FM') {
      this.setState({ modulation: 'AM' })
    } else {
      this.setState({ modulation: 'FM' })
    }
  }

  render () {
    return (
      <div id='container'>
        <h1>My Clock Radio</h1>

        <h2>The current time is:</h2>

        <Player power={this.state.power} modulation={this.state.modulation} />

        <div id='clock'>
          <div
            id='power-toggle'
            className='button'
            onClick={() => {
              this.togglePower()
            }}
          />

          <div className='spacer-top' />

          <div
            id='modulation-toggle'
            className='button'
            onClick={() => {
              this.toggleModulation()
            }}
          />

          <div id='clock-body'>
            <div className='speaker' />

            <Face />

            <div className='speaker' />
          </div>

          <div className='foot' />

          <div id='spacer-bottom' />

          <div className='foot' />
        </div>
      </div>
    )
  }
}

export default Clock
