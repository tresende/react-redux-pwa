import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

import Login from './components/Login';
import Logout from './components/Logout';

import { countReducer } from './reducers/countReducer'


const reducers = combineReducers({  countReducer });
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

function checkAuth(nextState, replace) {
  if (localStorage.getItem('auth-token') === null) {
    replace('/?msg=você precisa estar logado para acessar o endereço');
  }
}

ReactDOM.render(
    (
      <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Login} />
        <Route path="/home" component={App} onEnter={checkAuth} />
        <Route path="/item" component={App} onEnter={checkAuth} />
        <Route path="/logout" component={Logout} />
      </Router>
    </Provider>
    ), document.getElementById('root')
  );

registerServiceWorker();