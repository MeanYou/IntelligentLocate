import React, { Component } from 'react'

export default class DisplayController extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="display-controller">
				<div><img className='display-controller-condition' src={ this.props.showCondition ? require('ASSET/img/up.png') : require('ASSET/img/down.png') } onClick={ this.props.handleToogleCondition } /></div>
				<div><img className={ `display-controller-result ${ this.props.showCondition ? '' : 'full-height' } ${ this.props.showResult ? '' : 'full-width' }` } src={ this.props.showResult ? require('ASSET/img/right.png') : require('ASSET/img/left.png') } onClick={ this.props.handleToogleResult } /></div>
			</div>
		)
	}
}
