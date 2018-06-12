import ol from 'openlayers'
// import xhr from 'SERVICE/homePageService'

const CommonMethods = {
	addProvinceLayer: (map, layerList) => {
		// let layer = new ol.layer.Image({
		// 	source: new ol.source.ImageWMS({
		// 		ratio: 2,
		// 		url: 'http://192.168.100.70:8088/geoserver/cnvec/wms',
		// 		params: {'FORMAT': 'image/png',
		// 			'VERSION': '1.1.1',  
		// 			STYLES: '',
		// 			LAYERS: 'cnvec:province_polygon'
		// 		}
		// 	})
		// })

		let layer = new ol.layer.Vector({
			name: 'province',
			source: new ol.source.Vector({
				format: new ol.format.GeoJSON(),
				url: 'http://192.168.100.70:8088/geoserver/cnvec/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cnvec:province_simplified2&outputFormat=application%2Fjson'
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

		map.addLayer(layer)
		layerList.push(layer)

		// map.on('singleclick', (e) => {
		// 	console.log(e)
		// 	let view = map.getView()
		// 	let viewResolution = view.getResolution()
		// 	let source = layer.getSource()
		// 	let url = source.getGetFeatureInfoUrl(e.coordinate, viewResolution, view.getProjection(), { 'INFO_FORMAT': 'application/json', 'FEATURE_COUNT': 1 })
		// 	xhr({url}).then((data) => {
		// 		console.log(data)
		// 	})
		// })
	}
}

export default CommonMethods
