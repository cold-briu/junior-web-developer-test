import React from 'react';
import ReactDOM from 'react-dom';


import 'mdbootstrap/css/bootstrap.min.css'
import 'mdbootstrap/css/mdb.min.css'

// import 'mdbootstrap/js/jquery-3.4.1.min.js'
// import 'mdbootstrap/js/popper.min.js'
// import 'mdbootstrap/js/bootstrap.min.js'
// import 'mdbootstrap/js/mdb.min.js'

import './animate.css'

import App from './App.router';
import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
