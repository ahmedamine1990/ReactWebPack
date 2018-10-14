// reducers.js
import types from './types';


const INITIAL_STATE = {'books':[
    {"isbn":98711,"name":"kitab raqm 5","price":14.99},
    {"isbn":9871,"name":"open ur mind patched","price":15.66},
    {"isbn":9872,"name":"maalouf1","price":24.99},
    {"isbn":9875,"name":"maalouf3","price":14.99}
  ]
};

function bookReducer(state=INITIAL_STATE,action){
    switch(action.type) {
        case types.ADD_BOOK:
          return {'books': state.books.concat(action.newBook)};
        case types.DELETE_BOOK:      
             var newArray= [];
             for(var i=0;i<state.books.length; i++){
                if(i!=action.bookRank){
                    newArray.push(state.books[i]);
                }
             };
          return {'books': newArray };
        default:
          return state;
      }
}

export default bookReducer;