'use strict';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {BookList ,BookAddForm} from './book';


const initialState = {
  books: [
        {"isbn":98711,"name":"kitab raqm 5","price":14.99},
        {"isbn":9871,"name":"open ur mind patched","price":15.66},
        {"isbn":9872,"name":"maalouf1","price":24.99},
        {"isbn":9875,"name":"maalouf3","price":14.99}
        ]
};

const rootReducer = (state = initialState, action) => { return state;};
const store = createStore(rootReducer);

const Index = () => {
  return  <Provider store={store}>
             <BookList  />
          </Provider>
};

ReactDOM.render(<Index />, document.getElementById("index"));