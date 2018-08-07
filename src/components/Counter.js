import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary';
import Broken from './Broken';

class Counter extends Component {
    static propTypes = {
        counter:PropTypes.number.isRequired,
    }
    state = {
        counter:0
    }
    Increment(){
        this.setState(prevState=>({counter:prevState.counter+1}));
    }
    Decrement(){
        this.setState(prevState=>({counter:prevState.counter-1}));
    }
    render() {
        return (
            <div>
                <h3>错误边界</h3>
                <ErrorBoundary>
                    <Broken/>
                </ErrorBoundary>
                <div>Counter:{this.state.counter}</div>
                <button onClick={()=>this.Increment()}>Increment</button> 
                <button onClick={()=>this.Decrement()}>Decrement</button>
            </div>
        );
    }
}

export default Counter;
