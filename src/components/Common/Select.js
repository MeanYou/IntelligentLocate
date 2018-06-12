import React, { Component } from 'react'

export default class Select extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const name = this.props.name || console.error('组件未传入name属性')
		const options = this.props.options || console.error('组件未传入options属性')

		return (
			<select name={ name } onChange={ this.props.handleChange }>
				{ options.map(option => <option value={ option.value }>{ option.name }</option>) }
			</select>
		)
	}
}
