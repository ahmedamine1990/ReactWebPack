// reducers.js
import types from './types';
import { fetchGetBooksJson } from './operations';


const INITIAL_STATE = {'books':[]};

function bookReducer(state=INITIAL_STATE,action){
    switch(action.type) {
        case types.GET_BOOKS:
         return {'books': action.Books};
        case types.ADD_BOOK:
            var OBJECT = {  
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(action.newBook)
           }
      fetch('http://localhost:5000/books', OBJECT)  
      .then(res => {
          console.log(res);
          if (res.status ==201)
          {
              console.log("Success to add Book");
          }
          else
          {
              console.log("Failed to add book");
          }
          })
          return {'books': state.books.concat(action.newBook)};
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