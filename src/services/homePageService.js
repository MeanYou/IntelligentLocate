// const rootPath = 'http://localhost:9090/static/JsonData/'

const errHandler = (e) => {
	alert('[ XHR:Failed ] 详情请看控制台')
	console.error(e)
}

const xhr = ({ url, params = null, method = 'get' }) => {
	const defer = $.Deferred()

	$.ajax({
		type: method,
		url: url,
		data: params
		// xhrFields: { // 跨域允许带上 cookie
		//   withCredentials: [域名]
		// },
		// crossDomain: true
	})
	.done(defer.resolve)
	.fail(errHandler)

	return defer.promise()
}

export default xhr
