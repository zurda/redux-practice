import { combineReducers } from 'redux'

import todos from './todos'
import goals from './goals'
import loading from './loading'

export default combineReducers({
  todos,
  goals,
  loading
})

// reminder: implementation of thunk:
// const thunk = store => next => action => {
//   if (typeof action === 'function') return action(store.dispatch)
//   else return next(action)
// }
