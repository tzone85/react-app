import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    onMouseEnter() {
        alert('clicked');
    }

    onChange(event) {
        console.log(event.target.value);
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
                                <div key={item} onMouseEnter={this.onMouseEnter}>{item}</div>
                            );
                        })
                    }
                </h1>

                <input onChange={this.onChange} type="text"/>
            </div>
        );
    }
}

export default App;
