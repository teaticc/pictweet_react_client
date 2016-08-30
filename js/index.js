import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import AppContainer from './containers/App'
import tweetApp from "./reducers"
import thunk from "redux-thunk"

let store = createStore(tweetApp, applyMiddleware(thunk))
let rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  rootElement
)
