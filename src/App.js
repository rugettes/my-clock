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
                <h1>My Clock</h1>
                <h2>The current time is:</h2>
                <div id="clock">
                    <div id="clock-body">
                        <p id="clock-face">{this.state.time.toLocaleTimeString()}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;