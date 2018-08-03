import React, { Component } from 'react';

const Wrapper = (WrapperComponet) => {
    return class extends Component {
        render() {
            return <WrapperComponet {...this.props} />
        }
    }
}

const Hello = Wrapper((props) => {
    return (
        <div>{props.name}</div>
    );
})


class HighOrderComponent extends Component {
    render() {
        return (
            <div>
                <h3>高阶组件</h3>
                <Hello name='zhangxing' />
            </div>
        );
    }
}

export default HighOrderComponent;
