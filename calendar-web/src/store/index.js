import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'

import { createBrowserHistory } from 'history'

// Reducers
import reducers from './reducers'

export const history = createBrowserHistory()

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history)

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Middlewares
const middlewares = [thunk, historyMiddleware]

// Redux Logger
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(
  reducers(history),
  composeEnhancers(applyMiddleware(...middlewares))
)

store.asyncReducers = {}

export default store
