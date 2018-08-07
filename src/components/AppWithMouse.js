import React from 'react';
import PropTypes from 'prop-types';


class Mouse extends React.Component {
    static propTypes = {
        render:PropTypes.func.isRequired
    }
    state = { x: 0, y: 0 }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}

const Position = ({x,y}) =>{
    return (
        <h1>The mouse position is ({x}, {y})</h1>
    )
}

const Position1 = ({x,y}) =>{
    return (
        <p>这是鼠标的位置是 ({x}, {y})</p>
    )
}


const AppWithMouse = (props) => {
    return (
        <div style={{ height: '100%' }}>
            <h3>用 Render Props 代替 HOC</h3>
            <Mouse render={(props) => <Position {...props}/>}/>
            <Mouse render={(props)=> <Position1 {...props}/>} />
        </div>
    )
}

export default AppWithMouse;