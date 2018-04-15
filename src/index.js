import React from 'react'
import {
    render
} from 'react-dom'
import { Provider } from 'react-redux'
import Router from './router'
import configureStore from './store'
import 'src/actions'
const store = configureStore();


render(
    <Provider store={store}>
        <div>
            <Router/>
        </div>
    </Provider>, document.getElementById('root'));
