import types from './types.js';

export function addBook(book) {
    return { type: types.ADD_BOOK, newBook: book }
}
export function deleteBook(rank) {
    return { type: types.DELETE_BOOK, bookRank: rank }
}

<<<<<<< HEAD
export function editBook(book,rank) {
    return { type: types.EDIT_BOOK, changeBook: book , bookRank: rank }
}

export function editBookField(value,field,rank){
    return { type: types.EDIT_BOOK_FIELD, newValue: value , fieldToUpdate: field ,bookRank: rank }
=======
export function fetchGetBooksJson(books) {
    return { type: types.FETCHGETBOOKSJSON, Allbooks: books }
>>>>>>> 911d434416d1236981f3f32ff3367bc9dddef203
}
