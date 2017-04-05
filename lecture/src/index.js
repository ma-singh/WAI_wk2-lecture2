import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import clubsReducer from './core-module/reducers'

//import App from './App';
//import './index.css';

let store = createStore{clubsReducer}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
