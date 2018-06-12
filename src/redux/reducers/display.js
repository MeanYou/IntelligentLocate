import createReducer from 'UTIL/createReducer'
import { ACTION_HANDLERS } from 'ACTION/display'
import initState from 'STORE/initState'

export default createReducer(initState.display, ACTION_HANDLERS)
