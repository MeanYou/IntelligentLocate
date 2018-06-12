import moment from 'moment'

const month = moment().month()
const year = moment().year()
/**
 * 本文件的作用就是直观呈现 整个应用状态结构树 及其 初始值
 */
export default {
  /* 用户 session */
  userData: null,

  /* 是否显示条件查询和结果框 */
  display: {
    showCondition: true,
    showResult: true
  },

  /* 首页模块，按需加载 */
  homePage: {
    queryFilter: {
      queryType: 'case',
      compareIndicator: ['01', '02'],
      renderType: '立体柱状图',
      district: '100000',
      time: month === 0 ? [moment().year(year - 1).month(0), moment().year(year - 1).month(11)]
        : [moment().month(0), moment().month(month - 1)]
    }
  }
}
