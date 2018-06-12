// ================================
// Action Type
// ================================
const QUERY_TYPE_CHANGE = 'QUERY_TYPE_CHANGE'
const COMPARE_INDICATOR_CHANGE = 'COMPARE_INDICATOR_CHANGE'
const RENDER_TYPE_CHANGE = 'RENDER_TYPE_CHANGE'
const DISTRICT_CHANGE = 'DISTRICT_CHANGE'
const TIME_CHANGE = 'TIME_CHANGE'

// ================================
// Action Creator
// ================================
const queryTypeChange = (queryType) => ({
  type: QUERY_TYPE_CHANGE,
  payload: {
    id: setTimeout(() => {}), // 生成唯一 ID 的一种方式
    queryType
  }
})

const compareIndicatorChange = (compareIndicator) => ({
  type: COMPARE_INDICATOR_CHANGE,
  payload: {
    id: setTimeout(() => {}), // 生成唯一 ID 的一种方式
    compareIndicator
  }
})

const renderTypeChange = (renderType) => ({
  type: RENDER_TYPE_CHANGE,
  payload: {
    id: setTimeout(() => {}), // 生成唯一 ID 的一种方式
    renderType
  }
})

const districtChange = (district) => ({
  type: COMPARE_INDICATOR_CHANGE,
  payload: {
    id: setTimeout(() => {}), // 生成唯一 ID 的一种方式
    district
  }
})

const timeChange = (time) => ({
  type: TIME_CHANGE,
  payload: {
    id: setTimeout(() => {}), // 生成唯一 ID 的一种方式
    time
  }
})

/* default 导出所有 Action Creators */
export default {
  // 虽然是同步的函数，但请不要自行 bindActionCreators
  // 皆因调用 connect 后，react-redux 已经帮我们做了，见：
  // https://github.com/reactjs/react-redux/blob/master/src/utils/wrapActionCreators.js
  queryTypeChange, compareIndicatorChange, renderTypeChange, districtChange, timeChange
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [QUERY_TYPE_CHANGE]: (queryFilter, {payload}) => ({ ...queryFilter, queryType: payload.queryType }),
  [COMPARE_INDICATOR_CHANGE]: (queryFilter, {payload}) => ({ ...queryFilter, compareIndicator: payload.compareIndicator }),
  [RENDER_TYPE_CHANGE]: (queryFilter, {payload}) => ({ ...queryFilter, renderType: payload.renderType }),
  [DISTRICT_CHANGE]: (queryFilter, {payload}) => ({ ...queryFilter, district: payload.district }),
  [TIME_CHANGE]: (queryFilter, {payload}) => ({ ...queryFilter, time: payload.time })
}
