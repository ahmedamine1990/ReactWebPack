// reducers.js
import types from './types';
import { fetchGetBooksJson } from './operations';


const INITIAL_STATE = {'books':[]};

function bookReducer(state=INITIAL_STATE,action){
    switch(action.type) {
        case types.ADD_BOOK:
          return {'books': state.books.concat(action.newBook)};
<<<<<<< HEAD
        case types.EDIT_BOOK:
          var newArray= [];
          for(var i=0;i<state.books.length; i++){
            if(i!=action.bookRank){
                newArray.push(state.books[i]);
            }
            else{
              newArray.push(action.changeBook);
            }
          };
          return {'books': newArray};
        case types.EDIT_BOOK_FIELD:
          var newArray= [];
          for(var i=0;i<state.books.length; i++){
            if(i!=action.bookRank){
                newArray.push(state.books[i]);
            }
            else{
              var b= state.books[i];
              b[action.fieldToUpdate]= action.value;
              newArray.push(b);
            }
          };
          return {'books': newArray};
=======
        case types.FETCHGETBOOKSJSON:
          return {'books': action.Allbooks };
>>>>>>> 911d434416d1236981f3f32ff3367bc9dddef203
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