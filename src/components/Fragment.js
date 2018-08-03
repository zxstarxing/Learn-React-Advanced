import React, { Component, Fragment } from 'react'

const Temp = (props) => {
    return (
        <Fragment>
            <li>xiaoming</li>
            <li>xiaohong</li>
        </Fragment>
    )
}

class Fragement extends Component {
    render() {
        return (
            <div>
                <h3>Fragment 解决根节点只有一个问题</h3>
                <ul>
                    <Temp />
                </ul>
            </div>
        )
    }
}

export default Fragement
