import { combineReducers } from 'redux'

import booleanReducer from '../features/booleanSlice'

const rootReducer = combineReducers({
  boolean: booleanReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer as any
