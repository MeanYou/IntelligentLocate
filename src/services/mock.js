/*
	使用mockjs模拟请求
*/
import Mock from 'mockjs'

export const mockRequest = () => {
	Mock.mock(/homepage\/case/i, {
		status: true,
		data: {
			total: {
				totalCount: 29484471398,
				yearOnYearIncrease: '3%'
			},
			detail: [
				{
					'districtCode': '140000000000',
					'districtName': '山西',
					'x': 112.289188,
					'y': 37.572232,
					'totalCount': 654259022,
					'yearOnYearIncrease': '3%',
					'compareData': [96986, 40111]
				}, {
					'districtCode': '230000000000',
					'districtName': '黑龙江',
					'x': 127.764622,
					'y': 47.861067,
					'totalCount': 2989156112,
					'yearOnYearIncrease': '3%',
					'compareData': [36864, 68354]
				}, {
					'districtCode': '310000000000',
					'districtName': '上海',
					'x': 121.451744,
					'y': 31.200038,
					'totalCount': 229647767,
					'yearOnYearIncrease': '3%',
					'compareData': [96772, 89632]
				}, {
					'districtCode': '210000000000',
					'districtName': '辽宁',
					'x': 122.607802,
					'y': 41.292279,
					'totalCount': 1418140716,
					'yearOnYearIncrease': '3%',
					'compareData': [89116, 53690]
				}, {
					'districtCode': '500000000000',
					'districtName': '重庆',
					'x': 107.873783,
					'y': 30.056854,
					'totalCount': 147738411,
					'yearOnYearIncrease': '3%',
					'compareData': [32186, 70098]
				}, {
					'districtCode': '620000000000',
					'districtName': '甘肃',
					'x': 103.6409,
					'y': 35.3448,
					'totalCount': 473989132,
					'yearOnYearIncrease': '3%',
					'compareData': [92631, 54433]
				}, {
					'districtCode': '130000000000',
					'districtName': '河北',
					'x': 116.134617,
					'y': 39.547965,
					'totalCount': 1536736029,
					'yearOnYearIncrease': '3%',
					'compareData': [75554, 23460]
				}, {
					'districtCode': '410000000000',
					'districtName': '河南',
					'x': 113.61363,
					'y': 33.882278,
					'totalCount': 2511696723,
					'yearOnYearIncrease': '3%',
					'compareData': [37508, 43523]
				}, {
					'districtCode': '640000000000',
					'districtName': '宁夏',
					'x': 106.163374,
					'y': 37.270889,
					'totalCount': 255455093,
					'yearOnYearIncrease': '3%',
					'compareData': [71739, 46451]
				}, {
					'districtCode': '370000000000',
					'districtName': '山东',
					'x': 118.154646,
					'y': 36.354452,
					'totalCount': 1576111457,
					'yearOnYearIncrease': '3%',
					'compareData': [26595, 859]
				}, {
					'districtCode': '610000000000',
					'districtName': '陕西',
					'x': 108.868496,
					'y': 35.190751,
					'totalCount': 461003282,
					'yearOnYearIncrease': '3%',
					'compareData': [30023, 82325]
				}, {
					'districtCode': '540000000000',
					'districtName': '西藏',
					'x': 88.441628,
					'y': 31.490941,
					'totalCount': 19379149,
					'yearOnYearIncrease': '3%',
					'compareData': [60053, 78426]
				}, {
					'districtCode': '630000000000',
					'districtName': '青海',
					'x': 96.039414,
					'y': 35.670425,
					'totalCount': 57005460,
					'yearOnYearIncrease': '3%',
					'compareData': [43685, 66641]
				}, {
					'districtCode': '150000000000',
					'districtName': '内蒙古',
					'x': 113.921577,
					'y': 44.08868,
					'totalCount': 2183833800,
					'yearOnYearIncrease': '3%',
					'compareData': [2971, 14370]
				}, {
					'districtCode': '360000000000',
					'districtName': '江西',
					'x': 115.721225,
					'y': 27.61412,
					'totalCount': 435877419,
					'yearOnYearIncrease': '3%',
					'compareData': [41406, 94720]
				}, {
					'districtCode': '450000000000',
					'districtName': '广西',
					'x': 108.787824,
					'y': 23.83007,
					'totalCount': 472170117,
					'yearOnYearIncrease': '3%',
					'compareData': [9579, 32749]
				}, {
					'districtCode': '520000000000',
					'districtName': '贵州',
					'x': 106.874228,
					'y': 26.814999,
					'totalCount': 321274907,
					'yearOnYearIncrease': '3%',
					'compareData': [65115, 36614]
				}, {
					'districtCode': '510000000000',
					'districtName': '四川',
					'x': 102.692412,
					'y': 30.629009,
					'totalCount': 1017813192,
					'yearOnYearIncrease': '3%',
					'compareData': [71384, 11090]
				}, {
					'districtCode': '420000000000',
					'districtName': '湖北',
					'x': 112.270636,
					'y': 30.975155,
					'totalCount': 495020467,
					'yearOnYearIncrease': '3%',
					'compareData': [1879, 36336]
				}, {
					'districtCode': '460000000000',
					'districtName': '海南',
					'x': 109.743837,
					'y': 19.195755,
					'totalCount': 149412998,
					'yearOnYearIncrease': '3%',
					'compareData': [97874, 4650]
				}, {
					'districtCode': '440000000000',
					'districtName': '广东',
					'x': 113.422904,
					'y': 23.342221,
					'totalCount': 480557519,
					'yearOnYearIncrease': '3%',
					'compareData': [63550, 85669]
				}, {
					'districtCode': '110000000000',
					'districtName': '北京',
					'x': 116.411588,
					'y': 40.184801,
					'totalCount': 276433349,
					'yearOnYearIncrease': '3%',
					'compareData': [60949, 64130]
				}, {
					'districtCode': '220000000000',
					'districtName': '吉林',
					'x': 126.187774,
					'y': 43.666486,
					'totalCount': 1340224961,
					'yearOnYearIncrease': '3%',
					'compareData': [39033, 54630]
				}, {
					'districtCode': '430000000000',
					'districtName': '湖南',
					'x': 111.708191,
					'y': 27.609454,
					'totalCount': 1642986311,
					'yearOnYearIncrease': '3%',
					'compareData': [2465, 28638]
				}, {
					'districtCode': '350000000000',
					'districtName': '福建',
					'x': 117.985484,
					'y': 26.074778,
					'totalCount': 165403008,
					'yearOnYearIncrease': '3%',
					'compareData': [18736, 36295]
				}, {
					'districtCode': '530000000000',
					'districtName': '云南',
					'x': 101.486677,
					'y': 24.974811,
					'totalCount': 516853421,
					'yearOnYearIncrease': '3%',
					'compareData': [55238, 48892]
				}, {
					'districtCode': '340000000000',
					'districtName': '安徽',
					'x': 117.225517,
					'y': 31.825578,
					'totalCount': 1955054418,
					'yearOnYearIncrease': '3%',
					'compareData': [17695, 62993]
				}, {
					'districtCode': '330000000000',
					'districtName': '浙江',
					'x': 120.092188,
					'y': 29.18094,
					'totalCount': 243378683,
					'yearOnYearIncrease': '3%',
					'compareData': [34774, 88176]
				}, {
					'districtCode': '320000000000',
					'districtName': '江苏',
					'x': 119.462867,
					'y': 32.966977,
					'totalCount': 1944871970,
					'yearOnYearIncrease': '3%',
					'compareData': [53802, 91984]
				}, {
					'districtCode': '650000000000',
					'districtName': '新疆',
					'x': 85.189778,
					'y': 41.117254,
					'totalCount': 3318686175,
					'yearOnYearIncrease': '3%',
					'compareData': [51461, 99664]
				}, {
					'districtCode': '120000000000',
					'districtName': '天津',
					'x': 117.325222,
					'y': 39.303722,
					'totalCount': 194300330,
					'yearOnYearIncrease': '3%',
					'compareData': [26301, 7324]
				}
			]
		}
	})
}
