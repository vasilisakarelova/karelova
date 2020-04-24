import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { register } from './serviceWorker'

import api from './db'

ReactDOM.render(<App data={api} />, document.getElementById('root'))
register()
