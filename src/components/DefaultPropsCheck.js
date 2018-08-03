import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dress extends Component {
    static defaultProps ={
        name:"连衣裙",
        price:100,
        list:[{
            color:"red"
        }]
    }
    render() {
        return (
            <div>
                <h3>默认类型检查</h3>
                <p>这是一件{this.props.name}</p>
                <p>它的价格是{this.props.price}</p>
                <p>颜色</p>
                <ul>
                    {this.props.list.map((item,index)=>(
                        <li key={index}>{item.color}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

Dress.propTypes={
    name:PropTypes.string.isRequired,
    price:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    list:PropTypes.arrayOf(PropTypes.shape({
        color:PropTypes.string.isRequired,
    })).isRequired,
}

class DefaultPropsCheck extends Component {
    state = {
        name:"新的连衣裙",
        price:"150",
        list:[{
            color:"green",
        },{
            color:"red"
        },{
            color:"yellow"
        }]
    }
    render() {
        return (
            <div>
                <Dress/>
                <Dress name={this.state.name} price={this.state.price} list={this.state.list}/>
            </div>
        );
    }
}

export default DefaultPropsCheck;
