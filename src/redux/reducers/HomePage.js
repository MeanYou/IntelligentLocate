import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/HomePage'
import initState from 'STORE/initState'

export default createReducer(initState.homePage.queryFilter, ACTION_HANDLERS)
