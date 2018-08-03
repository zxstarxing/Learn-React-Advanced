import React, { Component, Fragment } from 'react';
import './App.css';
import Pure from './components/Pure'
import Fragement from './components/Fragment';
import Context from './components/Context';
import HighOrderComponent from './components/HighOrderComponent';
import MultiComponents from './components/MultiComponents';
import DefaultPropsCheck from './components/DefaultPropsCheck';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Pure text="这是一个纯净的组件" />
        <Fragement />
        <Context />
        <HighOrderComponent />
        <MultiComponents />
        <DefaultPropsCheck/>
      </Fragment>
    );
  }
}

export default App;
