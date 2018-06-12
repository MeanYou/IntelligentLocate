import React, { Component } from 'react'
import Navbar from './Navbar'
import Map from './Map'

let DevTools
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const children = this.props.children

    return (
      <div>
        <Navbar />
        <div className="route-container">
          { children }
        </div>
        <Map />
        { DevTools && <DevTools /> }
      </div>
    )
  }
}
