import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';
import createsagamiddleware from 'redux-saga';
import {withdraw} from './sagas/saga';
const sagamiddleware=createsagamiddleware();
const store=createStore(reducer,applyMiddleware(sagamiddleware));
sagamiddleware.run(withdraw);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
