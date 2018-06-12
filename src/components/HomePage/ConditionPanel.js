import React, { Component } from 'react'
import conditions from './condition.js'
import { Select, DatePicker, Button } from 'antd'
import DistrictPicker from 'COMPONENT/Common/DistrictPicker'

export default class ConditionPanel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			endOpen: false
		}

		this.handleStartOpenChange = this.handleStartOpenChange.bind(this)
		this.handleEndOpenChange = this.handleEndOpenChange.bind(this)
	}

	handleStartOpenChange(open) {
		!open && this.setState({ endOpen: true })
	}

	handleEndOpenChange(open) {
		this.setState({ endOpen: open })
	}

	render() {
		const Option = Select.Option

		const queryTypes = conditions.queryTypes
		const compareIndicators = conditions.compareIndicators
		const renderTypes = conditions.renderTypes

		const { MonthPicker } = DatePicker

		return (
			<div className="condition-panel" style={{ display: this.props.show ? '' : 'none' }}>
				<span className="condition-label">查询类型：</span>
				<Select
					value={ this.props.queryFilter.queryType }
					style={{ width: 120 }}
					onChange={ this.props.handleChange }
					size="small">
						{ queryTypes.map(({ value, name }) => <Option name="queryType" key={ value } value={ value }>{ name }</Option>) }
				</Select>
				<span className="condition-label">对比指标：</span>
				<Select
					mode="tags"
					maxTagCount="2"
					style={{ width: 220 }}
					value={ this.props.queryFilter.compareIndicator }
					onChange={ this.props.handleCompareIndicatorChange }
					size="small">
						{
							compareIndicators.filter(({ queryType, compareIndicator }) => queryType === this.props.queryFilter.queryType)[0]
								.compareIndicator.map(({ name, value }) => <Option name="compareIndicator" key={ value } value={ value }>{ name }</Option>)
						}
				</Select>
				<span className="condition-label">渲染类型：</span>
				<Select
					value={ this.props.queryFilter.renderType }
					style={{ width: 120 }}
					onChange={ this.props.handleChange }
					size="small">
						{ renderTypes.map(({ value, name }) => <Option name="renderType" key={ value } value={ value }>{ name }</Option>) }
				</Select>
				<span className="condition-label">时间范围：</span>
				<MonthPicker
					value={ this.props.queryFilter.time[0] }
					disabledDate={ this.props.disabledStartTime }
					onChange={ this.props.handleStartTimeChange }
					onOpenChange={ this.handleStartOpenChange }
					size="small"
					style={{ width: 100 }}
				/>
				~
				<MonthPicker
					open={ this.state.endOpen }
					value={ this.props.queryFilter.time[1] }
					disabledDate={ this.props.disabledEndTime }
					onChange={ this.props.handleEndTimeChange }
					onOpenChange={ this.handleEndOpenChange }
					size="small"
					style={{ width: 100 }}
				/>
				<span className="condition-label">区域：</span>
				<DistrictPicker />
				<Button size="small" size="small" onClick={ this.props.handleSubmit }>查询</Button>
			</div>
		)
	}
}
