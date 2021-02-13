import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router,Route,Link} from 'react-router';
import { createBrowserHistory } from 'history'
import * as serviceWorker from './serviceWorker';
import ManageStd from './page/manageStudent';
import Login from './page/login';
let browserHistory = createBrowserHistory()

ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={Login}/>
    <Route exact path="/managestd" component={ManageStd}/>
  </Router>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
