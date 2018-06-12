import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import NavMenu from './NavMenu'

/* 导航栏全局显示，控制着用户的登录注销 */

@connect( // 功能同 UTIL/createContainer
  ({ userData }) => ({ userData }),
  require('ACTION/user').default
)

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navbar">
        <Title content="公安大地图服务平台" icon={ require('ASSET/img/logo.png') }/>
        <NavMenu />
      </div>
    )
  }
}
