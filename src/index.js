import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  text: 'text',
  title: 'title'
};

function Reducer(state = initialState, action) {

  // Спросить
  // eslint-disable-next-line eqeqeq
  if (action.type == 'post-text') {
    return {text: action.value, title: state.title};
  }
  // eslint-disable-next-line eqeqeq
  if (action.type == 'post-title') {
    return {text: state.text, title: action.value};
  } 
  return state;
}

const store = new createStore(Reducer);  

ReactDOM.render(
  <Provider store={store}>  
  <App />
  </Provider> 
  , 
  document.getElementById('root')
  );

  serviceWorker.unregister();
