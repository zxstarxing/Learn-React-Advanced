import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    text:PropTypes.string.isRequired
};


class Pure extends PureComponent {
    render() {
        return (
            <div>
                <h3>PureComponent 纯净组件</h3>
                {this.props.text}
            </div>
        );
    }
}


Pure.propTypes = propTypes;


export default Pure;
