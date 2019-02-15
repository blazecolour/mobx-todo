import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { enableLogging } from 'mobx-logger'

import { Provider } from 'mobx-react';
import App from './components/App';
import stores from './store/stores/TodoStore';

enableLogging({
  action: true,
  reaction: false,
  transaction: true,
  compute: true,
})

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)
