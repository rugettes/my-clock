import React, { Component } from 'react'
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <Clock />
            </div>
        )
    }
}

class Clock extends Component {
    state = {
        time: new Date(),
        power: false,
        modulation: 'FM'
    }

    amURL = new Audio('https://nis.stream.publicradio.org/nis.aac')
    fmURL = new Audio('https://current.stream.publicradio.org/kcmp.aac')

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            time: new Date()
        })
    }

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

    render() {
        return (
            <div id="container">
                <h1>My Clock Radio</h1>
                <h2>The current time is:</h2>
                <div id="clock">
                    <div id="power-toggle" className="button" onClick={ () => { this.togglePower() } }></div>
                    <div className="spacer-top"></div>
                    <div id="modulation-toggle" className="button" onClick={() => { this.toggleModulation() }}></div>
                    <div id="clock-body">
                        <div className="speaker"></div>
                        <p id="clock-face">{ this.state.time.toLocaleTimeString() }</p>
                        <div className="speaker"></div>
                    </div>
                    <div className="foot"></div>
                    <div id="spacer-bottom"></div>
                    <div className="foot"></div>
                </div>
            </div>
        )
    }
}

export default App