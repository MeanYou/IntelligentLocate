// ================================
// Action Type
// ================================
const CONDITION_VISIBLE_CHANGE = 'CONDITION_VISIBLE_CHANGE'
const RESULT_VISIBLE_CHANGE = 'RESULT_VISIBLE_CHANGE'

// ================================
// Action Creator
// ================================
const conditionVisibleChange = (visibility) => ({
  type: CONDITION_VISIBLE_CHANGE,
  visibility
})

const resultVisibleChange = (visibility) => ({
  type: RESULT_VISIBLE_CHANGE,
  visibility
})

/* default 导出所有 Action Creators */
export default {
  // 虽然是同步的函数，但请不要自行 bindActionCreators
  // 皆因调用 connect 后，react-redux 已经帮我们做了，见：
  // https://github.com/reactjs/react-redux/blob/master/src/utils/wrapActionCreators.js
  conditionVisibleChange, resultVisibleChange
}

// ================================
// Action handlers for Reducer
// 本来更新 state 是 Reducer 的责任
// 但要把 ActionType 导出又引入实在太麻烦
// 且在 Reducer 中写 switch-case 实在太不优雅
// 故在此直接给出处理逻辑
// ================================
export const ACTION_HANDLERS = {
  [CONDITION_VISIBLE_CHANGE]: (display, {visibility}) => ({...display, showCondition: visibility}),
  [RESULT_VISIBLE_CHANGE]: (display, {visibility}) => ({...display, showResult: visibility})
}
