import { Component } from 'react'

class Player extends Component {
  amURL = new Audio('https://nis.stream.publicradio.org/nis.aac')

  fmURL = new Audio('https://current.stream.publicradio.org/kcmp.aac')

  render () {
    const { power, modulation } = this.props

    if (!power) {
      this.amURL.pause()

      this.fmURL.pause()
    } else {
      if (modulation === 'AM') {
        this.fmURL.pause()

        this.amURL.play()

        console.log('hellloooo')
      } else {
        this.amURL.pause()

        this.fmURL.play()
      }
    }

    return null
  }
}

export default Player
