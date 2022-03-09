import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app/store/store'
import { AppRouter } from './router/AppRouter'

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
