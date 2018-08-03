import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Topic = (props) => {
    return (
        <div>
            <Comment />
        </div>
    )
}

const Comment = (props,context) => {
    return (
        <div>{context.color}</div>
    )
}

Comment.contextTypes = {
    color:PropTypes.string
}

class Context extends Component {
    getChildContext() {
        return { color: "red" };
    }
    render() {
        return (
            <div>
                <h3>Context 上下文</h3>
                <Topic/>
            </div>
        );
    }
}

Context.childContextTypes = {
    color: PropTypes.string
}

export default Context;
