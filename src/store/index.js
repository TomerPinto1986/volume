import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { stationReducer } from './reducers/stationReducer'
import { userReducer } from './reducers/userReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({userReducer,stationReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

