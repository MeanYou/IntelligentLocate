import React, { Component } from 'react'
import { message } from 'antd'
import echarts from 'echarts'
import ResultTitle from 'COMPONENT/Common/ResultTitle'
import conditions from './condition.js'

export default class ResultPanel extends Component {
	constructor(props) {
		super(props)

		this.state = {
			totalCount: 0,
			yearOnYearIncrease: '0%'
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.resultData.id !== this.props.resultData.id) {
			this.loadChart(nextProps.resultData)
		}
	}

	loadChart(resultData) {
		if (resultData.status) {
			const totalCount = resultData.data.total.totalCount
			const yearOnYearIncrease = resultData.data.total.yearOnYearIncrease
			this.setState({
				totalCount,
				yearOnYearIncrease
			})

			this.loadRankChart(resultData.data.detail)
		} else {
			message.info('服务器出问题了哟')
		}
	}

	loadRankChart(data) {
		// 数组排序
		data.sort((a, b) => b.totalCount - a.totalCount)
		const topTen = data.filter((item, index) => index < 10)
		this.chartObj = echarts.init(document.querySelector('.chart2'))
		const option = {
			grid: {
				left: '5%',
				right: '8%',
				top: '1%',
				bottom: '5%',
				containLabel: true
			},
			tooltip: {
				axisPointer: {
					type: 'shadow'
				},
				trigger: 'axis',
				formatter: '{a} <br/>{b}: {c} ({d}%)'
			},
			itemStyle: {
				normal: {
					color: '#5AD4FE'
				}
			},
			xAxis: {
				type: 'value',
				show: true,
				position: 'top',
				boundaryGap: [0, 0.01]
			},
			yAxis: {
				type: 'category',
				data: topTen.map(item => item.districtName)
			},
			series: [
				{
					name: '数量',
					type: 'bar',
					label: {
						normal: {
							show: true,
							position: 'insideRight',
							textStyle: {
								color: '#000000'
							}
						}
					},
					data: topTen.map(item => item.totalCount).reverse()
				}
			]
		}
		this.chartObj.setOption(option)
	}

	render() {
		const queryType = conditions.queryTypes.filter(type => type.value === this.props.queryFilter.queryType)[0].name
		return (
			<div className={ `result-panel ${ this.props.showCondition ? '' : 'map-full-height' }` } style={{ display: this.props.show ? '' : 'none' }}>
				<ResultTitle text="基本信息" />
				<div className="chart1" style={{width: 300, height: 100, border: '1px solid green'}}>
					<table>
						<tr><td>{ queryType }数量</td><td>同比增长</td></tr>
						<tr><td>{ this.state.totalCount }</td><td>{ this.state.yearOnYearIncrease }</td></tr>
					</table>
				</div>
				<ResultTitle text="统计排名" />
				<div className="chart2" style={{width: 300, height: 400, border: '1px solid blue'}}></div>
			</div>
		)
	}
}
