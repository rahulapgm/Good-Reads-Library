import {ADD_BOOK, GET_BOOK_LIST, FETCH_BOOK_LIST, EDIT_BOOK_ITEM, SEARCH_BOOK, SHOW_ADD_FORM, SHOW_UPDATE_FORM, UPDATE_BOOK_ITEM, SET_UPDATE_ITEM } from '../constants';

export const addBook = (bookObj) => {
    return {
        type:ADD_BOOK,
        payload:bookObj
    }
}

export const getBookList = () => {
    return {
        type:GET_BOOK_LIST,
    }
}

export const fetchBookList = (bookList) => {
    return {
        type:FETCH_BOOK_LIST,
        payload:bookList
    }
}

export const editBookItem = (newBookObj) => {
    return {
        type:EDIT_BOOK_ITEM,
        payload:newBookObj
    }
}

export const searchBook = (searchText) => {
    return {
        type:SEARCH_BOOK,
        payload:searchText
    }
}

export const setAddFormVisibility = (visibilityInd) => {
    return {
        type: SHOW_ADD_FORM,
        payload:visibilityInd
    }
}

export const setUpdateFormVisibility = (visibilityInd) => {
    return {
        type: SHOW_UPDATE_FORM,
        payload:visibilityInd
    }
}


export const updateBookItem = (bookObj) => {
    return {
        type: UPDATE_BOOK_ITEM,
        payload:bookObj
    }
}

export const setUpdateItem = (bookItem) => {
    console.log("bookitem2", bookItem)
    return {
        type: SET_UPDATE_ITEM,
        payload:bookItem
    }
}