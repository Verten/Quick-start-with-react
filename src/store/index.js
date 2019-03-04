import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducer'
import sagas from '../pages/users/services'

const sagaMiddleware = createSagaMiddleware()

const finalCreateStore = compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(createLogger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
  sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('../pages/users/reducers', () => {
      const nextReducer = require('../pages/users/reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
