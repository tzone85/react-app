import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    onSubmit(event) {
        event.preventDefault();
        alert('submitted');
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
                                <div key={item} onChange={this.onChange}>{item}</div>
                            );
                        })
                    }
                </h1>
                <form onSubmit={this.onSubmit} action="">
                    <input onSubmit={this.onSubmit} type="text"/>
                </form>
            </div>
        );
    }
}

export default App;
