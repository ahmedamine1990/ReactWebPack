import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider, connect } from "react-redux"; //← Bridge React and Redux

import { PageLayout } from './common';

import {ChatBox} from "./chatbox";
import {UserLogin} from  './login';
import {BookComponent,BookAddForm} from './book';
import {BookH,Postadmin} from './up.jsx';
//import {App} from './redux/app';

import styles from './static/style.scss';







//ReactDOM.render(<UserLogin />, document.getElementById("top"));

// ReactDOM.render(     
//   <Provider store={store1}>
//     <App />
//   </Provider>, 
//     document.getElementById("center"));

//ReactDOM.render(<ChatBox />, document.getElementById("rc"));


ReactDOM.render((<PageLayout />), document.getElementById('rc'))