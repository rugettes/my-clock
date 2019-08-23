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
        time: new Date()
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

    render() {
        return (
            <div id="container">
                <h1>My Clock Radio</h1>
                <h2>The current time is:</h2>
                <div id="clock">
                    <div id="power-toggle" className="button"></div>
                    <div className="spacer-top"></div>
                    <div id="modulation-toggle" className="button"></div>
                    <div id="clock-body">
                        <div className="speaker"></div>
                        <p id="clock-face">{this.state.time.toLocaleTimeString()}</p>
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