import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Clock />
            </div>
        );
    }
}

class Clock extends Component {
    render() {
        return (
            <div>
                <h1>My Clock</h1>
            </div>
        );
    }
}

export default App;