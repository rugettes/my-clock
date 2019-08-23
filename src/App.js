import React, { Component } from 'react';
import './App.css';

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
        this.setState({
            power: !this.state.power
        })
    }

    toggleModulation = () => {
        if (this.state.modulation === 'FM') {
            this.setState({
                modulation: 'AM'
            })
        } else {
            this.setState({
                modulation: 'FM'
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

export default App;