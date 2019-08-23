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
            <div>
                <h1>My Clock</h1>
                <h2>The current time is {this.state.time.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default App;