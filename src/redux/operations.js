import fetch from 'cross-fetch';


export const fetchGetBooksJson = () => {
      var responseData = [];
      fetch(`http://localhost:5000/books`)
        .then(response => response.json())
        .then(json => {
          const responseData = json;
        });
        return responseData;
  };

