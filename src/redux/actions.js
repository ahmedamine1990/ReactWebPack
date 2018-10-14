import types from './types.js';

export function addBook(book) {
    return { type: types.ADD_BOOK, newBook: book }
}
export function deleteBook(rank) {
    return { type: types.DELETE_BOOK, bookRank: rank }
}
