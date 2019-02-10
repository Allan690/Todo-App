import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store1 = createStore(rootReducer);

render(
    <Provider store={store1}>
        <App />
    </Provider>,
    document.getElementById('root')
);