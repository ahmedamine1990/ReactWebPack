import React from "react";
import ReactDOM from "react-dom";
import {BookComponent,BookAddForm} from './book.jsx';
import {BookH} from './up.jsx';



var books = [
  {"isbn":98711,"name":"kitab raqm 5","price":14.99},
  {"isbn":9871,"name":"open ur mind patched","price":15.66},
  {"isbn":9872,"name":"maalouf1","price":24.99},
  {"isbn":9875,"name":"maalouf3","price":14.99}
];

const Index = () => {  
  return <div>
      <BookH />
      <BookComponent value={books} />
      <BookAddForm value={books} />   
      </div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));