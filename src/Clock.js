import React, { Component } from 'react'
import Face from './Face'
import './Clock.css'

export class Clock extends Component {
  state = {
    power: false,
    modulation: 'FM'
  }

  amURL = new Audio('https://nis.stream.publicradio.org/nis.aac')
  fmURL = new Audio('https://current.stream.publicradio.org/kcmp.aac')

  togglePower = () => {
    if (this.state.power) {
      this.setState({ power: false }, () => {
        this.amURL.pause()
        this.fmURL.pause()
      })
    } else {
      this.setState({ power: true }, () => {
        this.state.modulation === 'AM' ? this.amURL.play() : this.fmURL.play()
      })
    }
  }

  toggleModulation = () => {
    if (this.state.modulation === 'FM') {
      this.setState({ modulation: 'AM' }, () => {
        if (this.state.power) {
          this.fmURL.pause()
          this.amURL.play()
        }
      })
    } else {
      this.setState({ modulation: 'FM' }, () => {
        if (this.state.power) {
          this.amURL.pause()
          this.fmURL.play()
        }
      })
    }
  }

  render () {
    return (
      <div id='container'>
        <h1>My Clock Radio</h1>
        <h2>The current time is:</h2>
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
