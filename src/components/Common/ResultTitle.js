import React, { Component } from 'react'

export default class ResultTitle extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="result-title">
				<div style={{ width: 100, height: 30, border: '1px solid green' }}>{ this.props.text }</div>
			</div>
		)
	}
}
