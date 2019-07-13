import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    onClick() {
        alert('clicked');
    }

    render(){
        const list = [
            'Item 1',
            'Item 2',
            'Another Item'
        ];

        return (
            <div className="App">
                <h1>
                    {
                        list.map(item => {
                            return (
                                <div onClick={this.onClick}>{item}</div>
                            );
                        })
                    }
                </h1>
            </div>
        );
    }
}

export default App;
