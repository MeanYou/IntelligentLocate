import React, { Component } from 'react'
import { Link } from 'react-router'
import { Menu } from 'antd'

export default class NavMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 'HomePage'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  render() {
    const SubMenu = Menu.SubMenu

    return (
      <div className="nav-menu">
        <Menu mode="horizontal" selectedKeys={ [this.state.current] } onClick={ this.handleClick }>
          <Menu.Item key="HomePage">
            <Link to="/HomePage">首页</Link>
          </Menu.Item>
          <SubMenu title="人口管理">
            <Menu.Item key="PopulationManage">
              <Link to="/PopulationManage">人房查询</Link>
            </Menu.Item>
            <Menu.Item key="StaticAnalysis">
              <Link to="/StaticAnalysis">流动人口分析</Link>
            </Menu.Item>
            <Menu.Item key="KeyPersonManagement">
              <Link to="/KeyPersonManagement">重点人员管理</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}
