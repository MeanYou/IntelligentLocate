import React, { Component } from 'react'
import { message } from 'antd'
import xhr from 'SERVICE/homePageService'
import ConditionPanel from './ConditionPanel'
import ResultPanel from './ResultPanel'
import DisplayController from 'COMPONENT/Common/DisplayController'

import Eventful from 'UTIL/Eventful'

/*
	此处为首页模块的整合，为智能组件，为条件框和结果展示框提供所有所需props以及事件处理器。
*/
export default class HomePage extends Component {

	constructor(props, context) {
		// 既然用到了 context，需要 super 一下
		super(props, context)

		this.state = {
			resultData: { id: setTimeout(() => {}) },
			showCondition: true,
			showResult: true
		}

		// 控制条件、结果显隐
		this.handleToogleCondition = this.handleToogleCondition.bind(this)
		this.handleToogleResult = this.handleToogleResult.bind(this)

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleCompareIndicatorChange = this.handleCompareIndicatorChange.bind(this)
		this.disabledStartTime = this.disabledStartTime.bind(this)
		this.disabledEndTime = this.disabledEndTime.bind(this)
		this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
		this.handleEndTimeChange = this.handleEndTimeChange.bind(this)

		this.handleSubmit()
	}

	handleToogleCondition() {
		this.setState({
			showCondition: !this.state.showCondition
		})
		Eventful.dispatch('fullHeight')
	}

	handleToogleResult() {
		this.setState({
			showResult: !this.state.showResult
		})
		Eventful.dispatch('fullWidth')
	}

	handleChange(value, { props: {name} }) {
		name === 'queryType' && this.props.compareIndicatorChange(['01', '02'])
		this.props[name + 'Change'](value.trim())
	}

	handleCompareIndicatorChange(values, nodes) {
		if (values.length < 2) {
			message.info('对比指标不能少于两项哟')
			return
		}
		values.shift()
		this.props.compareIndicatorChange(values[0])
		setTimeout(() => { this.props.compareIndicatorChange(values) }, 300)
	}

	disabledStartTime(startTime) {
		const endTime = this.props.homePage.time[1]
		if (!startTime || !endTime) {
			return false
		}
		return startTime.valueOf() > endTime.valueOf()
	}

	disabledEndTime(endTime) {
		const startTime = this.props.homePage.time[0]
		if (!startTime || !endTime) {
			return false
		}
		return startTime.valueOf() > endTime.valueOf()
	}

	handleStartTimeChange(value) {
		this.props.timeChange([value, this.props.homePage.time[1]])
	}

	handleEndTimeChange(value) {
		this.props.timeChange([this.props.homePage.time[0], value])
	}

	handleSubmit(e) {
		e && e.preventDefault()
		xhr({
			method: 'get',
			url: 'homePage/case'
		})
		.then(data => {
			let resultData = JSON.parse(data)
			resultData.id = setTimeout(() => {})
			this.setState({
				resultData
			})
			// Eventful.dispatch('addPoint', resultData) // 测试
			Eventful.dispatch('addProvinceLayer')

		})
	}

	render() {
		return (
			<div>
				<ConditionPanel
					queryFilter={ this.props.homePage }
					handleChange={ this.handleChange }
					handleSubmit={ this.handleSubmit }
					handleCompareIndicatorChange= { this.handleCompareIndicatorChange }
					disabledStartTime={ this.disabledStartTime }
					disabledEndTime={ this.disabledEndTime }
					handleStartTimeChange={ this.handleStartTimeChange }
					handleEndTimeChange={ this.handleEndTimeChange }
					show={ this.state.showCondition } />
				<ResultPanel
					resultData={ this.state.resultData }
					queryFilter={ this.props.homePage }
					show={ this.state.showResult }
					showCondition={ this.state.showCondition } />
				<DisplayController
					showCondition={ this.state.showCondition }
					showResult={ this.state.showResult }
					handleToogleCondition={ this.handleToogleCondition }
					handleToogleResult={ this.handleToogleResult } />
			</div>
		)
	}
}
