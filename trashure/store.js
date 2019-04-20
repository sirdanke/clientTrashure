import { applyMiddleware, combineReducers,createStore } from 'redux'
import thunk from 'redux-thunk'
import Api from './Reducer/Api'

const rootReducer = combineReducers({Api})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store