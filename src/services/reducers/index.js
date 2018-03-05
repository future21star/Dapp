import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { PropertiesReducer } from './properties';

const reducer = combineReducers({
	properties: PropertiesReducer,
	routing: routerReducer
})

export default reducer
