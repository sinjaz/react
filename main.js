import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

window.store = createStore(counter);

ReactDOM.render(<App />, document.getElementById('app'));


function counter(state = [], action) {
  switch (action.type) {
  case 'ADD':
  	state.push(action.data);
    return state;
  case 'REMOVE':
  	state.splice(action.data, 1);
    return state;
  default:
    return state;
  }
}

store.subscribe(() =>
  console.log("STATE", store.getState())
);