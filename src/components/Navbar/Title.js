import React, { Component } from 'react'

export default class Title extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="nav-title">
				<img src={ this.props.icon } style={{ width: 35, height: 36 }} />
				<span>{ this.props.content }</span>
			</div>
		)
	}
}
