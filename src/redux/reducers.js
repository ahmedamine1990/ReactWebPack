// reducers.js
import types from './types';
import { fetchGetBooksJson } from './operations';


const INITIAL_STATE = {'books':[]};

function bookReducer(state=INITIAL_STATE,action){
    switch(action.type) {
        case types.ADD_BOOK:
          return {'books': state.books.concat(action.newBook)};
        case types.FETCHGETBOOKSJSON:
          return {'books': action.Allbooks };
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