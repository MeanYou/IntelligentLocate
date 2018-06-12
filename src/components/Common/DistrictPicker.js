import React, { Component } from 'react'
import { Cascader } from 'antd'
import xhr from 'SERVICE/homePageService'

const baseUrl = 'http://restapi.amap.com/v3/config/district?key=ee420794c4113817c43da88d7dc18130'

export default class DistrictPicker extends Component {
	constructor(props) {
		super(props)

		this.state = {
			options: [
				{
					value: '100000',
					label: '全国',
					isLeaf: false
				}
			]
		}

		this.loadData = this.loadData.bind(this)
	}

	loadData(selectedOptions) {
		console.log(selectedOptions)
		const targetOption = selectedOptions[selectedOptions.length - 1]
		targetOption.loading = true

		xhr({
			method: 'get',
			url: baseUrl + '&keywords=' + targetOption.value
		})
		.then(data => {
			targetOption.loading = false
			const districts = data.districts[0].districts.map((district, index) => {
				console.log(district.level === 'street')
				return {
					value: district.level === 'street' ? district.adcode + index : district.adcode,
					label: district.name,
					isLeaf: district.level === 'street'
				}
			})
			targetOption.children = districts
			this.setState({
				options: [...this.state.options]
			})
		})
	}

	render() {
		return (
			<div style={{ display: 'inline-block' }}>
				<Cascader
					style={{ width: 120 }}
					options={ this.state.options }
					loadData={ this.loadData }
					size="small" />
			</div>
		)
	}
}
