// reducers.js
import types from './types';
import { fetchGetBooksJson } from './operations';


const INITIAL_STATE = {'books':[],'user':{},IsAuth : false};

function bookReducer(state=INITIAL_STATE,action){
    switch(action.type) {
        case types.GET_BOOKS:
            return {'books': action.Books, 'user':state.user ,IsAuth : state.IsAuth};
        
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
                return {'books': state.books.concat(action.newBook), 'user': state.user};
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
          return {'books': newArray ,'user':state.user ,IsAuth : state.IsAuth};

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
          return {'books': newArray , 'user':state.user , IsAuth : state.IsAuth};
        case types.DELETE_BOOK:      
             var newArray= [];
             for(var i=0;i<state.books.length; i++){
                if(i!=action.bookRank){
                    newArray.push(state.books[i]);
                }
             };
          return {'books': newArray , 'user' : state.user , IsAuth : state.IsAuth};

        case types.ADD_USER:      
            var  authetificatedUser = {'username': action.username ,'password' : action.password };
            console.log(authetificatedUser);
            return {'books': state.books , 'user' : authetificatedUser , IsAuth : state.IsAuth };
        default:
          return state;
      }
}

export default bookReducer;