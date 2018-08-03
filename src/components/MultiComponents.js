import React, { Component } from 'react';

const Wrapper = ({ children }) => children;

const Hello = ({ name }) => {
    return (
        <Wrapper>
            <h3>返回多个组件的的正确方式</h3>
            <p>{name}</p>
        </Wrapper>
    );
}


class MultiComponents extends Component {
    render() {
        return (
            <div>
                <Hello name="多个组件" />
            </div>
        );
    }
}

export default MultiComponents;
