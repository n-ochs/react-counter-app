import React from 'react';
import Output from './Output';
import Increment from './Increment';
import Decrement from './Decrement';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount || 0
        };
    };

    render() {
        return (
            <div>
                <Decrement handleClick={this._decrement} />
                <Output count={this.state.count} />
                <Increment handleClick={this._increment} />
            </div>
        );
    };

    _increment = () => {
        //going to use this.setState() to increment the count
        let newState = {
            count: this.state.count + 1
        };
        this.setState(newState, () => {
            console.log('Finished incrementing');
        });
    };

    _decrement = () => {
        //going to use this.setState() to decrement the count
        let newState = {
            count: this.state.count - 1
        };
        this.setState(newState, () => {
            console.log('Finished decrementing');
        });
    };
};

export default Counter;