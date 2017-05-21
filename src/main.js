/**
 * Created by intelligrape on 9/5/17.
 */
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from './store/store'
import App from './components/App'

render(<Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('app'));