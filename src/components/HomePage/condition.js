const conditions = {
	queryTypes: [
		{ name: '案件', value: 'case' },
		{ name: '重点人员', value: 'person' },
		{ name: '警情', value: 'crime' },
		{ name: '警力', value: 'power' }
	],
	compareIndicators: [
		{
			queryType: 'case',
			compareIndicator: [
				{ name: '民事案件', value: '01' },
				{ name: '刑事案件', value: '02' },
				{ name: '行政案件', value: '03' },
				{ name: '经济案件', value: '04' }
			]
		},
		{
			queryType: 'person',
			compareIndicator: [
				{ name: '刑侦关注人员', value: '01' },
				{ name: '涉爆人员', value: '02' },
				{ name: '刑事犯罪前科人员', value: '03' },
				{ name: '经济犯罪前科人员', value: '04' }
			]
		},
		{
			queryType: 'crime',
			compareIndicator: [
				{ name: '凶杀类', value: '01' },
				{ name: '盗窃类', value: '02' },
				{ name: '抢劫、抢夺类', value: '03' },
				{ name: '聚众斗殴、寻衅滋事类', value: '04' },
				{ name: '防火燃爆类', value: '05' },
				{ name: '危险物品事故类', value: '06' },
				{ name: '群体事件类', value: '07' },
				{ name: '纠纷类', value: '08' }
			]
		},
		{
			queryType: 'power',
			compareIndicator: [
				{ name: '治安警察', value: '01' },
				{ name: '户籍警察', value: '02' },
				{ name: '刑事犯罪侦查警察', value: '03' },
				{ name: '交通警察', value: '04' },
				{ name: '巡逻警察', value: '05' },
				{ name: '经济犯罪侦查警察', value: '06' },
				{ name: '禁毒警察', value: '07' },
				{ name: '科技警察', value: '08' },
				{ name: '网络警察', value: '09' }
			]
		}
	],
	renderTypes: [
		{ name: '立体柱状图', value: '立体柱状图' },
		{ name: '饼状图', value: '饼状图' },
		{ name: '圆环图', value: '圆环图' },
		{ name: '双环图', value: '双环图' }
	]
}

export default conditions
