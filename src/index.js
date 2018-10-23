import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux"; //← Bridge React and Redux

import {ChatBox} from "./chatbox";
import {UserLogin} from  './login';
import {BookComponent,BookAddForm} from './book.jsx';
import {BookH,Postadmin} from './up.jsx';
import {App} from './redux/app';

import styles from './static/style.scss';



var books = [
  {"isbn":98711,"name":"kitab raqm 5","price":14.99},
  {"isbn":9871,"name":"open ur mind patched","price":15.66},
  {"isbn":9872,"name":"maalouf1","price":24.99},
  {"isbn":9875,"name":"maalouf3","price":14.99}
];


const Index = () => {  
  return <div>    
      <Postadmin />
      <BookComponent value={books} />
      <BookAddForm value={books} />   
      </div>;
};



ReactDOM.render(<UserLogin />, document.getElementById("top"));

// ReactDOM.render(     
//   <Provider store={store1}>
//     <App />
//   </Provider>, 
//     document.getElementById("center"));

ReactDOM.render(<ChatBox />, document.getElementById("buttom"));