import React, { Component } from 'react'
import ol from 'openlayers'
import 'openlayers/css/ol.css'

import Eventful from 'UTIL/Eventful'
import { message } from 'antd'

import CommonMethods from './Common'

export default class Map extends Component {
	constructor(props) {
		super(props)

		this.state = {
			fullWidth: false,
			fullHeight: false
		}

		this.layerList = []

		// 订阅条件框和结果框显隐变化
		Eventful.subscribe('fullWidth', () => this.fullWidth())
		Eventful.subscribe('fullHeight', () => this.fullHeight())
	}

	componentDidMount() {
		let attribution = new ol.Attribution({
				html: '© <a href="http://www.chinaonmap.com/map/index.html">天地图</a>'
			})

		// 以下三个图层分别为矢量切片，标注切片，默认矢量图层（用于增加一些简单的单个要素）
		let tileVec = new ol.layer.Tile({
			source: new ol.source.XYZ({
				attributions: [attribution],
				url: 'http://t2.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}'
			})
		})
		let tileCva = new ol.layer.Tile({
			source: new ol.source.XYZ({
				url: 'http://t2.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}'
			})
		})
		let vecDefault = new ol.layer.Vector({
			name: 'default_vector',
			source: new ol.source.Vector({
				features: []
			}),
			style: new ol.style.Style({
				image: new ol.style.Circle({
					radius: 7,
					stroke: new ol.style.Stroke({
						width: 2,
						color: '#fff'
					}),
					fill: new ol.style.Fill({
						color: '#008EEC'
					})
				}),
				stroke: new ol.style.Stroke({
					width: 3,
					color: [255, 0, 0, 1]
				}),
				fill: new ol.style.Fill({
					color: [0, 0, 255, 0.6]
				})
			})
		})

		this.layerList.push(tileVec, tileCva, vecDefault)

		window.map = new ol.Map({
			target: 'mapbox',
			layers: this.layerList,
			view: new ol.View({
				projection: 'EPSG:3857', // default，可选4326
				center: ol.proj.fromLonLat([104, 30]),
				zoom: 3
			}),
			controls: ol.control.defaults().extend([
				new ol.control.FullScreen(), // 全屏控件
				new ol.control.ScaleLine(), // 比例尺
				new ol.control.OverviewMap(), // 鹰眼控件
				new ol.control.Rotate(),
				new ol.control.MousePosition(),
				new ol.control.ZoomSlider()
			])
		})

		// Eventful.subscribe('addPoint', (data) => this.addPoint(data)) // 订阅
		Eventful.subscribe('addProvinceLayer', () => CommonMethods.addProvinceLayer(window.map, this.layerList))
	}

	// 给默认Vector图层添加点
	addPoint(resultData) {
		console.log(resultData)
		if (resultData.status) {
			const data = resultData.data.detail
			window.map.getLayers().forEach((layer) => {
				if (layer.get('name') === 'default_vector') {
					let source = layer.getSource()
					let features = data.map(
						({x, y}) => 
						new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([x, y])))
					)

					source.addFeatures(features)
				}
			})
			
		} else {
			message.info('服务器出问题了哟')
		}
	}

	fullWidth() {
		this.setState({
			fullWidth: !this.state.fullWidth
		})
		setTimeout(() => window.map.updateSize())
	}

	fullHeight() {
		this.setState({
			fullHeight: !this.state.fullHeight
		})
		setTimeout(() => window.map.updateSize())
	}

	render() {
		return (
			<div id="map" className={`map-container ${this.state.fullWidth ? 'map-full-width' : ''} ${this.state.fullHeight ? 'map-full-height' : ''}`}>
				<div id="mapbox"></div>
			</div>
		)
	}
}
