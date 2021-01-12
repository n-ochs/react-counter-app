import React from 'react';
import Output from './Output';
import Increment from './Increment';
import Decrement from './Decrement';

class AlternateCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount || 0
        };
    };

    render() {
        return (
            <div>
                <Decrement handleClick={this._decrementby10} />
                <Output count={this.state.count} />
                <Increment handleClick={this._incrementby10} />
            </div>
        );
    };

    _incrementby10 = () => {
        //going to use this.setState() to increment the count
        let newState = {
            count: this.state.count + 10
        };
        this.setState(newState, () => {
            console.log('Finished incrementing');
        });
    };

    _decrementby10 = () => {
        //going to use this.setState() to decrement the count
        let newState = {
            count: this.state.count - 10
        };
        this.setState(newState, () => {
            console.log('Finished decrementing');
        });
    };
};

export default AlternateCounter;